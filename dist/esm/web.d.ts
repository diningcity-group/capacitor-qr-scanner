import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin } from './definitions';
export declare class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const QrScanner: QrScannerWeb;
export { QrScanner };
