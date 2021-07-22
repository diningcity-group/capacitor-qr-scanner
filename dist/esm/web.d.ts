import { WebPlugin } from '@capacitor/core';
import type { QrScannerPlugin } from './definitions';
export declare class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
    constructor();
    scanQrCode(): Promise<{
        value: string;
    }>;
}
