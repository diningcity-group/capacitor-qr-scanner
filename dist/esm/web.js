import { WebPlugin } from '@capacitor/core';
export class QrScannerWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async requestPermissions() {
        return this.checkPermissions();
    }
    async checkPermissions() {
        if (typeof navigator === 'undefined' || !navigator.permissions) {
            throw this.unavailable('Permissions API not available in this browser.');
        }
        const permission = await navigator.permissions.query({ name: "camera" });
        return { camera: permission.state };
    }
    async scanQrCode() {
        return { 'value': '' };
    }
}
const QrScanner = new QrScannerWeb();
export { QrScanner };
//# sourceMappingURL=web.js.map