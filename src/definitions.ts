import { PermissionState } from "@capacitor/core";

export interface QrScannerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  checkPermissions(): Promise<PermissionStatus>;
  requestPermissions(): Promise<PermissionStatus>;
  scanQrCode(): Promise<{ result: string }>;
}

export interface PermissionStatus {
  camera: PermissionState;
}