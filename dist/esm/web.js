import { WebPlugin } from '@capacitor/core';
export class QrScannerWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async checkPermissions() {
        throw this.unimplemented('Not implemented on web.');
    }
    async requestPermissions() {
        throw this.unimplemented('Not implemented on web.');
    }
    async scanQrCode() {
        throw this.unimplemented('Not implemented on web.');
    }
}
import { registerPlugin } from '@capacitor/core';
const QrScanner = registerPlugin('QrScanner', {
    web: () => import('./web').then(m => new m.QrScannerWeb()),
});
export { QrScanner };
//# sourceMappingURL=web.js.map