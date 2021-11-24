import { Authenticator } from 'sharedkernel/authenticator';
import { TotpVerifyOptions } from 'speakeasy';

const authenticator = new Authenticator();

describe('Authenticator', () => {
  it('should generates totp secret', () => {
    const secret = authenticator.generateSecret({
      name: 'totp-secret',
    });
    const testTable = [
      {
        property: 'ascii',
        value: 'string',
      },
      {
        property: 'hex',
        value: 'string',
      },
      {
        property: 'base32',
        value: 'string',
      },
      {
        property: 'otpauth_url',
        value: 'string',
      },
    ];

    expect(typeof secret).toBe('object');
    Object.keys(secret).forEach((key, index) => {
      expect(secret).toHaveProperty(testTable[index].property);
      expect(typeof secret[key]).toEqual(testTable[index].value);
    });
  });

  it('should returns current generated totp token', () => {
    const secret = authenticator.generateSecret({ name: 'totp-secret' });
    const token = authenticator.generateTotpToken({
      secret: secret.base32,
      encoding: 'base32',
    });
    expect(typeof token).toBe('string');
    expect(token.length).toBe(6);
  });

  it('should generates qrcode url', async () => {
    const qrcodeUrl = await authenticator.generateQrCodeUrl('url');
    const base64regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

    expect(typeof qrcodeUrl).toBe('string');
    expect(base64regex.test(qrcodeUrl.split(',')[1])).toBe(true);
  });

  it('should verify totp token', function () {
    const secret = authenticator.generateSecret({ name: 'totp-secret' });
    const token = authenticator.generateTotpToken({
      secret: secret.base32,
      encoding: 'base32',
    });
    const totpPayload: TotpVerifyOptions = {
      secret: secret.base32,
      encoding: 'base32',
      token: token,
    };

    const result = authenticator.verify(totpPayload);

    expect(typeof token).toBe('string');
    expect(token.length).toBe(6);
    expect(result).toBe(true);
  });
});
