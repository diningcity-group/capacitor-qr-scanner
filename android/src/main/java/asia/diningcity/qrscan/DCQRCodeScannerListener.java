package asia.diningcity.qrscan;

import androidx.annotation.Nullable;

public interface DCQRCodeScannerListener {
    void onQRCodeScannerResult(@Nullable String qrCodeResult, @Nullable String error);
    void onQRCodeScannerClosed();
}
