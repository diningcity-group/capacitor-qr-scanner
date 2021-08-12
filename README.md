# Welcome to the Capacitor QR Code Scanner

This repository is a capacitor plug in for scanning QR Codes on Android and iOS.

# Table of contents

- [Installation](#Installation)
- [Usage](#Usage)

## Installation

To install from the command line:

````shell
npm i @diningcity/capacitor-qr-scanner;
npx cap sync;

or

npm i @diningcity/capacitor-qr-scanner;
ionic capacitor copy;
(https://ionicframework.com/docs/cli/commands/capacitor-copy)
````
**NOTE:** After install the plug-in, you should add some settings and code snippets into your navite project.

### iOS
1. Open the ios project with Xcode from your project and add camera usage description in info.plist as following

````
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>

ex: App would like to use camera to scan QRCode.

````

or

You can add this directly without coding with Xcode as following

![Screen shot](./images/plugin_05.png)

2. That's all

### Android

## Usage
### iOS
To import the following into your code

````react
import { QrScanner } from '@diningcity/capacitor-qr-scanner';
import React from "react";

const Test = () => {
    async function scanQR() {
      const {camera} = await QrScanner.requestPermissions();
      if (camera == "granted") {
        const {result} = await QrScanner.scanQrCode();
        alert(result);
      } else {
        alert("You should allow camera permission.");
      }
    }
    return (
        <React.Fragment>
            <div onClick={() => scanQR()}>
            </div>
        </React.Fragment>
    );
};

````

### Android
To import the following into your code

````react
import { QrScanner } from '@diningcity/capacitor-qr-scanner';
import React from "react";
const Test = () => {
    const scanQrCode = async () => {
        const {result} = await QrScanner.scanQrCode();
        alert(result);
    }
    return (
        <React.Fragment>
            <div onClick={scanQrCode}>
            </div>
        </React.Fragment>
    );
};
````

After remove old android directory from the root director of the project, then run the following commands
````shell
npx cap add android
npx cap open android
````