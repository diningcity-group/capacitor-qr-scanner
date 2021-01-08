//
//  QRScannerPermissions.swift
//  QRScanner
//
//  Created by 周斌 on 2018/11/30.
//

import UIKit
import Photos
public class QRScannerPermissions: NSObject {
    
    public static func authorizePhotoWith(comletion:@escaping (Bool) -> Void) {
        let granted = PHPhotoLibrary.authorizationStatus()
        switch granted {
        case PHAuthorizationStatus.authorized:
            comletion(true)
        case PHAuthorizationStatus.denied, PHAuthorizationStatus.restricted:
            comletion(false)
        case PHAuthorizationStatus.notDetermined:
            PHPhotoLibrary.requestAuthorization({ (status) in
                DispatchQueue.main.async {
                    comletion(status == PHAuthorizationStatus.authorized ? true:false)
                }
            })
        case .limited:
            comletion(true)
        @unknown default:
            PHPhotoLibrary.requestAuthorization({ (status) in
                DispatchQueue.main.async {
                    comletion(status == PHAuthorizationStatus.authorized ? true:false)
                }
            })
        }
    }
    
    public static func authorizeCameraWith(comletion:@escaping (Bool) -> Void ) {
        let granted = AVCaptureDevice.authorizationStatus(for: AVMediaType.video)
        
        switch granted {
        case .authorized:
            comletion(true)
            break
        case .denied:
            comletion(false)
            break
        case .restricted:
            comletion(false)
            break
        case .notDetermined:
            AVCaptureDevice.requestAccess(for: AVMediaType.video, completionHandler: { (granted: Bool) in
                DispatchQueue.main.async {
                    comletion(granted)
                }
            })
        @unknown default:
            AVCaptureDevice.requestAccess(for: AVMediaType.video, completionHandler: { (granted: Bool) in
                DispatchQueue.main.async {
                    comletion(granted)
                }
            })
        }
    }
    
    public static func openSystemPrivacySetting() {
        let appSetting = URL(string: UIApplication.openSettingsURLString)
        
        if appSetting != nil {
            if #available(iOS 10, *) {
                UIApplication.shared.open(appSetting!, options: [:], completionHandler: nil)
            } else {
                UIApplication.shared.openURL(appSetting!)
            }
        }
    }
}
