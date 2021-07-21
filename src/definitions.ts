
export interface QrScannerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}