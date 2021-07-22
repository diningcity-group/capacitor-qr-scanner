export interface QrScannerPlugin {
    scanQrCode(): Promise<{
        value: string;
    }>;
}
