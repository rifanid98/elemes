import { GeneratedSecret, GenerateSecretOptions, TotpOptions, TotpVerifyOptions } from 'speakeasy';
import { QRCodeSegment } from 'qrcode';
export interface AuthenticatorInterface {
    generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
    generateTotpToken(totpOptions?: TotpOptions): string;
    generateQrCodeUrl(text: string | QRCodeSegment[]): Promise<string>;
    verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}
export declare class Authenticator implements AuthenticatorInterface {
    generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
    generateTotpToken(totpOptions?: TotpOptions): string;
    generateQrCodeUrl(url: string | QRCodeSegment[]): Promise<string>;
    verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}
