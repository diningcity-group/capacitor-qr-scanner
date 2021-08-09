import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin, PermissionStatus } from './definitions';

export class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async checkPermissions(): Promise<PermissionStatus> {
    throw this.unimplemented('Not implemented on web.');
  }
    
  async requestPermissions(): Promise<PermissionStatus> {
    throw this.unimplemented('Not implemented on web.');
  }

  async scanQrCode(): Promise<{ result: string }> {
    throw this.unimplemented('Not implemented on web.');
  }
}

import { registerPlugin } from '@capacitor/core';
const QrScanner = registerPlugin<QrScannerPlugin>('QrScanner', {
  web: () => import('./web').then(m => new m.QrScannerWeb()),
});
export { QrScanner };
