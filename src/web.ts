import { WebPlugin } from '@capacitor/core';
import { PermissionStatus, QrScannerPlugin } from './definitions';

export class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async requestPermissions(): Promise<PermissionStatus> {
    return this.checkPermissions();
  }

  async checkPermissions(): Promise<PermissionStatus> {
    if (typeof navigator === 'undefined' || !navigator.permissions) {
      throw this.unavailable('Permissions API not available in this browser.');
    }
      
    const permission = await navigator.permissions.query({name:"camera"});
    return {camera: permission.state};
  }

  async scanQrCode(): Promise<{ value: string }> {
    return {'value': ''};
  }
}

const QrScanner = new QrScannerWeb();

export { QrScanner };
