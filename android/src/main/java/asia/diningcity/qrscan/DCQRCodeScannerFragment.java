package asia.diningcity.qrscan;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.budiyev.android.codescanner.CodeScanner;
import com.budiyev.android.codescanner.CodeScannerView;
import com.budiyev.android.codescanner.DecodeCallback;
import com.budiyev.android.codescanner.ErrorCallback;
import com.google.zxing.Result;

import asia.diningcity.qrscan.capacitorqrscanner.R;

public class DCQRCodeScannerFragment extends Fragment {

    private View rootView;
    private CodeScannerView codeScannerView;
    private CodeScanner codeScanner;
    private Boolean isPermissionGranted;
    private ActivityResultLauncher<String> permissionResult;

    // MARK: - Parameters
    private DCQRCodeScannerListener scannerListener;

    // MARK: - Construct
    public static DCQRCodeScannerFragment getInstance(DCQRCodeScannerListener scannerListener) {
        DCQRCodeScannerFragment fragment = new DCQRCodeScannerFragment();
        fragment.scannerListener = scannerListener;
        return fragment;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);
        if (rootView == null) {
            rootView = inflater.inflate(R.layout.fragment_code_scanner, container, false);
            codeScannerView = rootView.findViewById(R.id.codeScannerView);
            codeScanner = new CodeScanner(getContext(), codeScannerView);
            codeScanner.setDecodeCallback(new DecodeCallback() {
                @Override
                public void onDecoded(@NonNull Result result) {
                    final Result _result = result;
                    if (getActivity() != null) {
                        getActivity().runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                scannerListener.onQRCodeScannerResult(_result.getText(), null);
                            }
                        });
                    }
                }
            });
            codeScanner.setErrorCallback(new ErrorCallback() {
                @Override
                public void onError(@NonNull Exception error) {
                    final Exception _error = error;
                    if (getActivity() != null) {
                        getActivity().runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Toast.makeText(getActivity(), String.format(getString(R.string.scanner_error), _error.getLocalizedMessage()), Toast.LENGTH_LONG).show();
                                scannerListener.onQRCodeScannerResult(null, _error.getLocalizedMessage());
                            }
                        });
                    }
                }
            });
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (getActivity() != null) {
                    if (getActivity().checkSelfPermission(Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                        isPermissionGranted = false;
                        permissionResult =
                                registerForActivityResult(
                                        new ActivityResultContracts.RequestPermission(),
                                        new ActivityResultCallback<Boolean>() {
                                            @Override
                                            public void onActivityResult(Boolean result) {
                                                isPermissionGranted = true;
                                                if (result) {
                                                    codeScanner.startPreview();
                                                }
                                            }
                                        });
                        permissionResult.launch(Manifest.permission.CAMERA);
                    } else {
                        isPermissionGranted = true;
                    }
                }
            } else {
                isPermissionGranted = true;
            }

            if (isPermissionGranted) {
                codeScanner.startPreview();
            }
        }

        return rootView;
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onPause() {
        codeScanner.releaseResources();
        super.onPause();
    }
}
