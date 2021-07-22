var capacitorPlugin = (function (exports, core) {
    'use strict';

    const QrScanner = core.registerPlugin('QrScanner', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.QrScannerWeb()),
    });

    class QrScannerWeb extends core.WebPlugin {
        constructor() {
            super();
        }
        async scanQrCode() {
            throw this.unimplemented('No implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        QrScannerWeb: QrScannerWeb
    });

    exports.QrScanner = QrScanner;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
