import { WebPlugin } from '@capacitor/core';
import { QrScannerPlugin, PermissionStatus } from './definitions';
export declare class QrScannerWeb extends WebPlugin implements QrScannerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    scanQrCode(): Promise<{
        result: string;
    }>;
}
declare const QrScanner: QrScannerPlugin;
export { QrScanner };
