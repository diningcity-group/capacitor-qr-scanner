- [English](#welcome-to-the-capacitor-qr-code-scanner)
- [Chinese, Simplified / 中文](#欢迎使用-电容qr扫描仪)

# Welcome to the Capacitor QR Code Scanner

This repository is a capacitor plug in for scanning QR Codes on Android and iOS.

# Table of contents

- [Installation](#Installation)
- [Usage](#Usage)

## Installation

To install from the command line:

````shell
npm i @diningcity/capacitor-qr-scanner
````
**NOTE:** After install the plug-in, you should add some code snippets into your android project.

1. Open the android project with android studio and you should register the plugin class in MainActivity.java as follows

    ```java
public class MainActivity extends BridgeActivity {
      @Override
      public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
          // Additional plugins you've installed go here
          add(QrScanner.class);
        }});
      }
    }
```

2. Add CodeScannerActivity into AndroidManifest.xml

```xml
<activity        android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
        android:name="asia.diningcity.qrscan.CodeScannerActivity"
        tools:ignore="Instantiatable">
    </activity>
```

## Usage

To import the following into your code

````react
import { Plugins } from '@capacitor/core';
const { QrScanner } = Plugins;
import React from "react";
const Test = () => {
    async function scanQR() {
		let ret = QrScanner.scanQrCode().then((data) => {
        	alert(JSON.stringify(data))
		});
    }
    return (
        <React.Fragment>
            <div onClick={() => scanQR()}>
            </div>
        </React.Fragment>
    );
};

````

# 欢迎使用 电容qr扫描仪
使用电容器的Android和iOS二维码扫描仪
# 目录
- [安装](#安装)
- [用法](#用法)

## 安装
从命令行安装，请执行以下操作：
````shell
npm i @diningcity/capacitor-qr-scanner
````

## 用法
将以下内容引入到代码中
````react
import {QrScanner} from '@diningcity/capacitor-qr-scanner';
import React from "react";

const Test = () => {
    async function scanQR() {
          let ret =  QrScanner.echo({value:"test"}).then(function (data) {
               alert(JSON.stringify(data))
           });
    }
    return (
        <React.Fragment>
            <div onClick={() => scanQR()}>
            </div>
        </React.Fragment>
    );
};

````
