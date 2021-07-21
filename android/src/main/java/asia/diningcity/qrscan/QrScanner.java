package asia.diningcity.qrscan;

import android.Manifest;
import android.graphics.Color;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(
        name = "QrScanner",
        permissions = {
                @Permission(
                        alias = "camera",
                        strings = {Manifest.permission.CAMERA}
                )
        }
)
public class QrScanner extends Plugin {

    private DCQRCodeScannerFragment scannerFragment;
    private String callCallbackId = null;

    private final String TAG = QrScanner.class.getSimpleName();

    @PluginMethod
    public void scanQrCode(PluginCall call) {
        if (getPermissionState("camera") != PermissionState.GRANTED) {
            requestPermissionForAlias("camera", call, "cameraPermissionCallback");
        } else {
            showScannerScreen(call);
        }

        Log.d(TAG, "Android scanQrCode called");
    }

    @PermissionCallback
    private void cameraPermissionCallback(PluginCall call) {
        if (getPermissionState("camera") == PermissionState.GRANTED) {
            showScannerScreen(call);
        } else {
            call.reject("Permission is required to scan a qrcode");
        }
    }

    public void showScannerScreen(PluginCall call) {

        callCallbackId = call.getCallbackId();
        getBridge().saveCall(call);

        int containerViewId = 1001;
        FrameLayout containerView = getBridge().getActivity().findViewById(containerViewId);
        if (containerView == null) {
            containerView = new FrameLayout(getActivity().getApplicationContext());
            containerView.setId(containerViewId);

            getBridge().getWebView().setBackgroundColor(Color.TRANSPARENT);
            ((ViewGroup)getBridge().getWebView().getParent()).addView(containerView);

            final FragmentManager manager = getBridge().getActivity().getSupportFragmentManager();
            FragmentTransaction transaction = manager.beginTransaction();
            scannerFragment = DCQRCodeScannerFragment.getInstance(new DCQRCodeScannerListener() {
                @Override
                public void onQRCodeScannerResult(@Nullable String qrCodeResult, @Nullable String error) {
                    FragmentManager _manager = getBridge().getActivity().getSupportFragmentManager();
                    FragmentTransaction _transaction = _manager.beginTransaction();
                    _transaction.remove(scannerFragment);
                    scannerFragment = null;

                    if (callCallbackId != null) {
                        PluginCall savedCall = getBridge().getSavedCall(callCallbackId);
                        if (qrCodeResult != null) {
                            JSObject ret = new JSObject();
                            ret.put("result", qrCodeResult);
                            savedCall.resolve(ret);
                        } else if (error != null) {
                            savedCall.reject(error);
                        } else {
                            savedCall.reject("Error occurred during scan a qrcode");
                        }
                    }
                }
            });
            transaction.add(containerViewId, scannerFragment);
            transaction.commit();
        } else {
            call.reject("QRCode scanner has already been launched");
        }
    }

}
