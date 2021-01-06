import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin } from './definitions';

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
}

const QrScanner = new QrScannerWeb();

export { QrScanner };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(QrScanner);
