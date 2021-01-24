# capacitor-qr-scanner
A QR Code scanner for Android and iOS using Capacitor

### iOS：

##### Step 1: QrCodePlugin file in path:
  (copy this file to your project same path;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/ios/Capacitor/Capacitor/Plugins/QrScanner
```
<div align=center>
<img src="/images/plugin_01.png" width="800">
</div>

##### Step 2: add QrCodePlugin to your iOS Project with below operations;
######  a.open your ios project:
<div align=center>
    <img src="/images/plugin_02_0.png" width="800">
</div> 

###### b. add QrCodePlugin file:(path : node_modules/@capacitor/ios/Capacitor/Capacitor/Plugins/QrScanner)
<div align=center>
    <img src="/images/plugin_02.png" width="800">
</div> 
 <div align=center>
    <img src="/images/plugin_03.png" width="800">
</div> 

show like this , add Success;
<div align=center>
    <img src="/images/plugin_04.png" width="800">
</div> 

set QRScanner.framework Embed & Sign;
<div align=center>
    <img src="/images/plugin_04_1.png" width="800">
</div> 

###### c. info.plist auth:
    check your info.plist file, if there is not 'Privacy - Camera Usage Description' exist;
    add 'NSCameraUsageDescription' with String like below;

<div align=center>
    <img src="/images/plugin_05.png" width="800">
</div> 

###### d. Web excute iOS method:
 
 <div align=center>
    <img src="/images/plugin_web.png" width="800">
</div>   

###### e. Terminal excute order:
    
```
npx ionic capacitor copy ios
```

###### f. iOS rebuild and run app in your mobile(not support Simulator):

### Android：

##### Step 1: QrCodePlugin file in path:
  (copy this file to your project same path;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/plugin/qrScanner
```
<div align=center>
<img src="/images/step1.png" width="800">
</div>

##### Step 2: layout file in path:
  (copy this file to your project same path;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/res/layout/activity_code_scanner.xml
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/res/layout/dialog_scan_result.xml
```
<div align=center>
<img src="/images/step2.png" width="800">
</div>

##### Step 2: layout file in path:
  (copy this file to your project same path;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/res/layout/activity_code_scanner.xml
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/res/layout/dialog_scan_result.xml
```
<div align=center>
<img src="/images/step2.png" width="800">
</div>

##### Step 3: styles file in path:
  (change these files;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/res/values/styles.xml
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/res/values/strings.xml
```
<div align=center>
<img src="/images/step3-1.png" width="800">
<img src="/images/step3-2.png" width="800">
<img src="/images/step3-3.png" width="800">
</div>

##### Step 4: AndroidManifest.xml file in path:
  (change this file;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/src/main/AndroidManifest.xml
```
<div align=center>
<img src="/images/step4.png" width="800">
</div>

##### Step 5: build.gradle file in path:
  (change this file;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/android/capacitor/build.gradle
```
<div align=center>
<img src="/images/step5.png" width="800">
</div>

##### Step 6: sync project:
  
<div align=center>
<img src="/images/step6.png" width="800">
</div>

##### Step 7: change your MainActivity:
  (change this file;)
  
<div align=center>
<img src="/images/step7.png" width="800">
</div>


Any Questions Contact me!
