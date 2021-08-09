# Welcome to the Capacitor QR Code Scanner

This repository is a capacitor plug in for scanning QR Codes on Android and iOS.

# Table of contents

- [Installation](#Installation)
- [Usage](#Usage)

## Installation

To install from the command line:

````shell
npm i @diningcity/capacitor-qr-scanner;
````

## Usage

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

## 用法 IOS
将以下内容引入到代码中
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
            <div onClick={scanQrCode}>
            </div>
        </React.Fragment>
    );
};
````

## 用法 Android
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

从命令行请执行以下操作：
````shell
npx cap add android
npx cap open android
````
