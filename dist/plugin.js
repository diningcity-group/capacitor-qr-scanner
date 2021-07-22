var capacitorPlugin = (function (exports, core) {
    'use strict';

    class QrScannerWeb extends core.WebPlugin {
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
    const QrScanner = core.registerPlugin('QrScanner', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.QrScannerWeb()),
    });

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        QrScannerWeb: QrScannerWeb,
        QrScanner: QrScanner
    });

    exports.QrScanner = QrScanner;
    exports.QrScannerWeb = QrScannerWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
