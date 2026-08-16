# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目简介

这是一个 [Capacitor](https://capacitorjs.com) 插件（`@diningcity/capacitor-qr-scanner`），在 iOS 和 Android 上提供原生二维码扫描能力。它以 npm 包形式发布，宿主 Capacitor 应用通过 `npm i` + `npx cap sync` 引入使用。仓库遵循标准的 Capacitor 插件三层结构：TypeScript API（`src/`）、iOS 原生实现（`ios/`）、Android 原生实现（`android/`）。

## 常用命令

```bash
npm run build       # 清理 dist/ → tsc（dist/esm）→ rollup（dist/plugin.js）
npm run lint        # prettier --check + swiftlint lint
npm run prettier    # 格式化 {css,html,ts,js,java} 文件
npm run swiftlint   # 通过 node-swiftlint 检查 Swift 源码
npm run watch       # tsc --watch
npm run clean       # rimraf ./dist
```

- `npm run build` 是发布前的构建门槛（`prepublishOnly` 会自动执行它）。
- **没有 JS 测试框架**。`ios/PluginTests/` 以及 `android/src/test/`/`android/src/androidTest/` 目标都是未修改的 Capacitor 模板桩代码。原生构建通过在 Xcode（`open ios/Plugin.xcworkspace`）或 Android Studio（`android/`）中打开项目来验证。
- `dist/` 会被提交到仓库，并且是 npm 实际发布的内容（见 `package.json` 中的 `files`）。修改 `src/` 后需运行 `npm run build` 以保持 `dist/` 同步。

## 对外 API

在 `src/definitions.ts` 中定义为 `QrScannerPlugin` 接口，均为基于 Promise 的方法：

- `echo(options: { value: string })` — 模板自带的 echo，予以保留
- `checkPermissions()` / `requestPermissions()` — 相机权限（`{ camera: PermissionState }`）
- `scanQrCode()` — 打开扫描器，扫描成功时 resolve `{ result: string }`

注册的插件名为 `QrScanner`，三层完全一致：`src/web.ts` 中的 `registerPlugin('QrScanner', …)`、iOS 中的 `@objc(QrScanner)` / `CAP_PLUGIN(QrScanner, "QrScanner", …)`，以及 Android 中的 `@CapacitorPlugin(name = "QrScanner")`。重命名时需保持三者同步。

## 架构

### TypeScript 层（`src/`）
- `definitions.ts` — 插件接口 + `PermissionStatus`。
- `web.ts` — `QrScannerWeb extends WebPlugin`（Web 端所有方法均为 `unimplemented`）以及将 `QrScanner` 名称与原生实现绑定的 `registerPlugin` 调用。`registerPlugin` 位于此文件，而非 `index.ts`。
- `index.ts` — 仅重新导出 `definitions` 和 `web`。

### iOS（`ios/Plugin/`）
原生逻辑用 Swift 编写，Capacitor 的方法路由在 Objective-C（`Plugin.m`，即 `CAP_PLUGIN`/`CAP_PLUGIN_METHOD` 宏）中声明。

- `Plugin.swift` — `QrScanner: CAPPlugin`，实现 `DCQRScannerViewControllerDelegate`。`scanQrCode` 全屏展示 `DCQRScannerViewController`；扫描结束后，`viewController(_:didScanCode:withError:)` 对保存的 `CAPPluginCall` 进行 resolve/reject。
- `DCQRScannerViewController.swift` — 全屏 UI（关闭 + 闪光灯按钮、`QRScannerView`）；自行 dismiss，并将成功/失败结果回传给 delegate。
- `QRScanner/QRScannerView.swift` — 内嵌的 AVFoundation 扫描器（源自 Mercari 的 QRScanner）。通过 `AVCaptureMetadataOutput` 检测二维码，然后裁剪画面生成预览图。处理手电筒与对焦动画。
- 资源（图片、`DCQRScannerViewController.xib`）位于 `DCQRScanner.bundle`，通过 `Extensions.swift` 中的 `Bundle.scannerModule` 扩展加载，**而非** `Bundle.main`。

发布的 CocoaPod 名为 `DiningcityCapacitorQrScanner`（`DiningcityCapacitorQrScanner.podspec`），与 `QrScanner` 类名不同。podspec 的版本号取自 `package.json`。iOS 部署目标为 15.0（与 `ios/Podfile` 一致）。

### Android（`android/src/main/java/asia/diningcity/qrscan/`）
插件代码仅使用 Java（无 Kotlin），包名为 `asia.diningcity.qrscan`。

- `QrScanner.java` — `QrScanner extends Plugin`。处理相机权限（`@CapacitorPlugin` + `@Permission` 别名 `camera`），然后调用 `showScannerScreen`。扫描结果通过保存调用（saved-call）模式传递：`getBridge().saveCall(call)` + 在 fragment 监听器中使用 `getSavedCall(callCallbackId)`。
- `DCQRCodeScannerFragment.java` — 一个 `androidx.fragment.app.Fragment`，被添加到一个覆盖在 WebView 之上的 `FrameLayout`（id `1001`）。底层使用 `com.github.yuriy-budiyev:code-scanner` 库（封装了 ZXing）。解码/错误/返回键回调转发给 `DCQRCodeScannerListener`。
- `DCQRCodeScannerListener.java` — 双回调接口（`onQRCodeScannerResult`、`onQRCodeScannerClosed`），由插件实现。

Android 关键信息：R 类导入为 `asia.diningcity.qrscan.capacitorqrscanner.R`（即 Gradle 的 `namespace`），与 Java 的 `package` 不同。`code-scanner` 依赖来自 **JitPack**（`android/build.gradle` 中的 `maven { url 'https://jitpack.io' }`）——宿主应用必须添加相同的仓库。minSdk 24、compile/target 36、Java 21。

## 值得注意的坑

- Capacitor 版本为 8.x（`@capacitor/android`/`@capacitor/core`/`@capacitor/ios`/`@capacitor/cli` 均为 devDependencies `^8.0.0`，`@capacitor/core` peer 依赖 `>=8.0.0`）。
- 宿主应用必须添加 `NSCameraUsageDescription`（iOS `Info.plist`）以及 JitPack Maven 仓库（Android `build.gradle`）——详见 `README.md`。
- Android 扫描器是直接在 WebView 父级上覆盖一个 `FrameLayout`，而非启动独立的 Activity；这正是 fragment/容器清理逻辑（`removeView`、`transaction.remove`）分散在 `QrScanner.java` 中的原因。
