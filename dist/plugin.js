var capacitorPlugin = (function (exports, core) {
    'use strict';

    class QrScannerWeb extends core.WebPlugin {
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

    exports.QrScanner = QrScanner;
    exports.QrScannerWeb = QrScannerWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
