import { registerPlugin } from '@capacitor/core';
import type { QrScannerPlugin } from './definitions';

const QrScanner = registerPlugin<QrScannerPlugin>('QrScanner', {
    web: () => import('./web').then(m => new m.QrScannerWeb()),
});

export * from './definitions';
export {QrScanner}
