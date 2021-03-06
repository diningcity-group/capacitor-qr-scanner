package asia.diningcity.qrscan;

import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin(
        requestCodes = {QrScanner.REQUEST_CODE_SCAN}
)
public class QrScanner extends Plugin {
    protected static final int REQUEST_CODE_SCAN = 2;

    private final String TAG = QrScanner.class.getSimpleName();
    @PluginMethod
    public void scanQrCode(PluginCall call) {
        saveCall(call);

        Log.d(TAG, "Android scanQrCode called");
        Intent scanIntent = new Intent(getContext(), CodeScannerActivity.class);
        startActivityForResult(call, scanIntent, REQUEST_CODE_SCAN);
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);

        Log.d(TAG, "Android scanQrCode handleOnActivityResult");

        PluginCall savedCall = getSavedCall();
        if (savedCall == null || data == null) return;

        if (requestCode == REQUEST_CODE_SCAN) {
            if (resultCode == 0) {
                String qrCode = data.getStringExtra("RESULT_QR_CODE");
                JSObject ret = new JSObject();
                ret.put("result", qrCode);
                savedCall.success(ret);
            } else {
                String error = data.getStringExtra("RESULT_ERROR");
                if (error != null) {
                    savedCall.reject(error);
                    return;
                }
                savedCall.reject("Error occurred when get a QR code.");
            }
        }
    }
}
