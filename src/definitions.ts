// declare module '@capacitor/core' {
//   interface PluginRegistry {
//     QrScanner: QrScannerPlugin;
//   }
// }

import type { PermissionState } from '@capacitor/core';


export interface QrScannerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  checkPermissions(): Promise<PermissionStatus>;
  requestPermissions(): Promise<PermissionStatus>;
  scanQrCode(): Promise<{ value: string }>;
}

export interface PermissionStatus {
  camera: PermissionState;
}