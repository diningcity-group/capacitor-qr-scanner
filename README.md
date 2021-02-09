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

## Usage

To import the following into your code

````react
import {Plugins} from '@diningcity/capacitor-qr-scanner';
import React from "react";

const {QrScanner} = Plugins;

const Test = () => {
    async function scanQR() {
        let ret = await QrScanner.scanQrCode();
        alert(JSON.stringify(ret))
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
- 中文：
  - [安装和运行](https://github.com/diningcity-group/capacitor-qr-scanner/blob/main/README.md#安装和运行)

## 安装和运行
从命令行安装
````shell
npm i @diningcity/capacitor-qr-scanner
````

在组件中引入
````react
import {Plugins} from '@diningcity/capacitor-qr-scanner';
import React from "react";

const {QrScanner} = Plugins;

const Test = () => {
    async function scanQR() {
        let ret = await QrScanner.scanQrCode();
        alert(JSON.stringify(ret))
    }
    return (
        <React.Fragment>
            <div onClick={() => scanQR()}>
            </div>
        </React.Fragment>
    );
};

````
