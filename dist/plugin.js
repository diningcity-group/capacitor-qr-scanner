var capacitorPlugin = (function (exports, core) {
    'use strict';

    class QrScannerWeb extends core.WebPlugin {
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

    exports.QrScanner = QrScanner;
    exports.QrScannerWeb = QrScannerWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
