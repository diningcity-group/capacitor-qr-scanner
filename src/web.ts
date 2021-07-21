import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin } from './definitions';

export class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const QrScanner = new QrScannerWeb();

export { QrScanner };
