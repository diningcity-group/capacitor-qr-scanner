import Foundation
import Capacitor
import AVFoundation


/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(QrScanner)
public class QrScanner: CAPPlugin, DCQRScannerViewControllerDelegate {
    
    private var pluginCallback: CAPPluginCall?
    
    @objc override public func checkPermissions(_ call: CAPPluginCall) {
        
        let cameraState: String
        
        switch AVCaptureDevice.authorizationStatus(for: .video) {
        case .notDetermined:
            cameraState = "prompt"
        case .restricted, .denied:
            cameraState = "denied"
        case .authorized:
            cameraState = "granted"
        default:
            cameraState = "prompt"
        }
        call.resolve(["camera": cameraState])
    }

    @objc override public func requestPermissions(_ call: CAPPluginCall) {
        AVCaptureDevice.requestAccess(for: .video) { [weak self] _ in
            self?.checkPermissions(call)
        }
    }
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": value
        ])
    }
    
    @objc
    func scanQrCode(_ call: CAPPluginCall) {
        pluginCallback = call
        
        let vc = DCQRScannerViewController(nibName: String(describing: DCQRScannerViewController.self), bundle: .scannerModule)
        vc.modalPresentationStyle = .fullScreen
        vc.delegate = self
        
        DispatchQueue.main.async {
            self.bridge?.viewController?.present(vc, animated: true, completion: nil)
        }
    }
    
    func viewController(_ viewController: DCQRScannerViewController, didScanCode code: String?, withError error: String?) {
        if let error = error {
            pluginCallback?.reject(error)
        } else if let code = code {
            pluginCallback?.resolve([
                "value" : code
            ])
        }
    }
}
