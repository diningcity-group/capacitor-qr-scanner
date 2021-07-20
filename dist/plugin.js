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
    }
    const QrScanner = new QrScannerWeb();
    core.registerWebPlugin(QrScanner);

    exports.QrScanner = QrScanner;
    exports.QrScannerWeb = QrScannerWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
