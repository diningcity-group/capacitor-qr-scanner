import { PermissionState } from "@capacitor/core";
export interface QrScannerPlugin {
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
export interface PermissionStatus {
    camera: PermissionState;
}
