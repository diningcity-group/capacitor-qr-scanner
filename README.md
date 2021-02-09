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
