# capacitor-qr-scanner
A QR Code scanner for Android and iOS using Capacitor

### iOS：

##### Step 1: QrCodePlugin file in path:
  (copy this file to your project same path;)
  
```
capacitor-qr-scanner/node_modules/@capacitor/ios/Capacitor/Capacitor/Plugins/QrScanner
```
<!--![QrScanner](/images/plugin_01.png)-->
<div align=center>
<img src="/images/plugin_01.png" width="200">
</div>
![QrScanner](./images/plugin_01.png)

##### Step 2: add QrCodePlugin to your iOS Project with below operations;
######  a.open your ios project:
<div align=center>
    <img src="/images/plugin_02_0.png" width="200">
</div> 

###### b. add QrCodePlugin file:(path : node_modules/@capacitor/ios/Capacitor/Capacitor/Plugins/QrScanner)
<div align=center>
    <img src="/images/plugin_02.png" width="200">
</div> 
 <div align=center>
    <img src="/images/plugin_03.png" width="200">
</div> 

show like this , add Success;
<div align=center>
    <img src="/images/plugin_04.png" width="200">
</div> 

###### c. info.plist anth:
    check your info.plist file, if there is not 'Privacy - Camera Usage Description' exist;
    add 'NSCameraUsageDescription' with String like below;

<div align=center>
    <img src="/images/plugin_05.png" width="200">
</div> 

###### d. Web excute ios method:
 
 <div align=center>
    <img src="/images/plugin_web.png" width="200">
</div>   

###### e. Teminal excute order:
    
```
npx ionic capacitor copy ios
```

###### f. iOS rebuild and run app in your mobile(not support Simulator):

Any Questions Contact me!
