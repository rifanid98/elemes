import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import {
  GeneratedSecret,
  GenerateSecretOptions,
  TotpOptions,
  TotpVerifyOptions,
} from 'speakeasy';
import * as QRCODE from 'qrcode';
import { QRCodeSegment } from 'qrcode';

export interface AuthenticatorInterface {
  generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
  generateTotpToken(totpOptions?: TotpOptions): string;
  generateQrCodeUrl(text: string | QRCodeSegment[]): Promise<string>;
  verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}

@Injectable()
export class Authenticator implements AuthenticatorInterface {
  /**
   * Generates secret for TOTP
   * @param {GenerateSecretOptions} options
   */
  generateSecret(options?: GenerateSecretOptions): GeneratedSecret {
    return speakeasy.generateSecret(options);
  }

  /**
   * Generate current totp token
   * @param {TotpOptions} totpOptions
   */
  generateTotpToken(totpOptions?: TotpOptions): string {
    return speakeasy.totp(totpOptions);
  }

  /**
   * Generate a qrcode url to be scanned with the authenticator app
   * @param {string | QRCodeSegment[]} url
   */
  generateQrCodeUrl(url: string | QRCodeSegment[]): Promise<string> {
    return new Promise((resolve, reject) => {
      QRCODE.toDataURL(url, (err, url) => {
        if (!err) {
          resolve(url);
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Verify totp token
   * @param totpVerifyOptions
   */
  verify(totpVerifyOptions: TotpVerifyOptions): boolean {
    return speakeasy.totp.verify(totpVerifyOptions);
  }
}
