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
}
const QrScanner = new QrScannerWeb();
export { QrScanner };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(QrScanner);
//# sourceMappingURL=web.js.map