import { registerPlugin } from '@capacitor/core';
const QrScanner = registerPlugin('QrScanner', {
    web: () => import('./web').then(m => new m.QrScannerWeb()),
});
export * from './definitions';
export { QrScanner };
//# sourceMappingURL=index.js.map