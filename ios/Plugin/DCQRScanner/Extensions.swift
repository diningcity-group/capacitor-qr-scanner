//
//  Extensions.swift
//  Plugin
//
//  Created by JinJin Lee on 6/29/21.
//  Copyright © 2021 Max Lynch. All rights reserved.
//

import Foundation

extension Bundle {
    static var scannerModule: Bundle = {
        return Bundle(for: DCQRScannerViewController.self)
    }()
}
