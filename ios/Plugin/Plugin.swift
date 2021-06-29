import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(QrScanner)
public class QrScanner: CAPPlugin, DCQRScannerViewControllerDelegate {
    
    private var pluginCallback: CAPPluginCall?
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc
    func scanQrCode(_ call: CAPPluginCall) {
        pluginCallback = call
        
        let vc = DCQRScannerViewController(nibName: String(describing: DCQRScannerViewController.self), bundle: Bundle(for: DCQRScannerViewController.self))
        vc.modalPresentationStyle = .fullScreen
        vc.delegate = self
        
        DispatchQueue.main.async {
            self.bridge.viewController.present(vc, animated: true, completion: nil)
        }
    }
    
    func viewController(_ viewController: DCQRScannerViewController, didScanCode code: String?, withError error: String?) {
        if let error = error {
            pluginCallback?.reject(error)
        } else if let code = code {
            pluginCallback?.resolve([
                "result" : code
            ])
        }
    }
}
