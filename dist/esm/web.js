import { WebPlugin } from '@capacitor/core';
export class QrScannerWeb extends WebPlugin {
    constructor() {
        super({
            name: 'QrScanner',
            platforms: ['web'],
        });
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async checkPermissions() {
        throw this.unavailable('Permissions API not available in this browser.');
    }
    async requestPermissions() {
        throw this.unavailable('Permissions API not available in this browser.');
    }
    async scanQrCode() {
        throw this.unavailable('SacnQRCode not available in this browser.');
    }
}
const QrScanner = new QrScannerWeb();
export { QrScanner };
//# sourceMappingURL=web.js.map