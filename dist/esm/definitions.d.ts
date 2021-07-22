export interface QrScannerPlugin {
    scanQrCode(): Promise<{
        result: string;
    }>;
}
