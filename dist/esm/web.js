import { WebPlugin } from '@capacitor/core';
export class QrScannerWeb extends WebPlugin {
    constructor() {
        super();
    }
    async scanQrCode() {
        throw this.unimplemented('No implemented on web.');
    }
}
//# sourceMappingURL=web.js.map