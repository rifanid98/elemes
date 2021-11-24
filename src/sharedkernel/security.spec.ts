import { Security } from 'sharedkernel/security';

type Data = { name: string; password: string };

describe('Hash', () => {
  const security = new Security();
  const password = 'password';

  it('should hash the password', async () => {
    const hashed = await security.hash(password);
    expect(hashed).not.toEqual(password);
    expect(hashed.substr(0, 2)).toEqual('$2');
  });

  it('should  verify the password', async () => {
    const hashed = await security.hash(password);
    const verified = await security.verify(password, hashed);
    expect(verified).toBe(true);
  });

  it('should clear password field from data', () => {
    const data = { name: 'name', password };
    const result = security.clear<Data>(data);
    expect(result).not.toHaveProperty('password');
  });
});
