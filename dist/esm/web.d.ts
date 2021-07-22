import { WebPlugin } from '@capacitor/core';
import { PermissionStatus, QrScannerPlugin } from './definitions';
export declare class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    requestPermissions(): Promise<PermissionStatus>;
    checkPermissions(): Promise<PermissionStatus>;
    scanQrCode(): Promise<{
        value: string;
    }>;
}
declare const QrScanner: QrScannerWeb;
export { QrScanner };
