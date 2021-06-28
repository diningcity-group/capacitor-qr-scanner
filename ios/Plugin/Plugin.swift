import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(QrScanner)
public class QrScanner: CAPPlugin {
    
    private var pluginCallback: CAPPluginCall?
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc
    func scanQRCode(_ call: CAPPluginCall) {
        pluginCallback = call
        
        let vc = DCQRScannerViewController(nibName: String(describing: DCQRScannerViewController.self), bundle: nil)
        vc.modalPresentationStyle = .fullScreen
        vc.delegate = self
        
        DispatchQueue.main.async {
            self.bridge.viewController.present(vc, animated: true, completion: nil)
        }
    }
}

extension QrScanner: DCQRScannerViewControllerDelegate {
    func viewController(_ viewController: DCQRScannerViewController, didScanCode code: String) {
        self.pluginCallback?.success(
            [
                "result" : code
            ]
        )
    }
}
