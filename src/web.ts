import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin, PermissionStatus } from './definitions';

export class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
  constructor() {
    super({
      name: 'QrScanner',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async checkPermissions(): Promise<PermissionStatus> {
    throw this.unavailable('Permissions API not available in this browser.');
  }

  async requestPermissions(): Promise<PermissionStatus> {
    throw this.unavailable('Permissions API not available in this browser.');
  }

  async scanQrCode(): Promise<{ value: string }> {
    throw this.unavailable('SacnQRCode not available in this browser.');
  }
}

const QrScanner = new QrScannerWeb();

export { QrScanner };
