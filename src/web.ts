import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin } from './definitions';

export class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
  constructor() {
    super({
      name: 'QrScanner',
      platforms: ['web'],
    });
  }

  async scanQrCode(): Promise<{value: string}> {
      throw this.unimplemented('No implemented on web.')
  }
}

const QrScanner = new QrScannerWeb();

export { QrScanner };