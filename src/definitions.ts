declare module '@capacitor/core' {
  interface PluginRegistry {
    QrScanner: QrScannerPlugin;
  }
}

export interface QrScannerPlugin {
  scanQrCode(): Promise<{value: string}>;
}
