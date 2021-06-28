declare module '@capacitor/core' {
    interface PluginRegistry {
        QrScanner: QrScannerPlugin;
    }
}
export interface QrScannerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
