import * as bcrypt from 'bcrypt';

export interface SecurityInterface {
  hash(value: string): Promise<string>;
  verify(plain: string, hashed: string): Promise<boolean>;
  clear<T>(value: Record<string, any>): T;
}

export class Security implements SecurityInterface {
  /**
   * Hashing given string
   * @param value
   */
  async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(value, salt);
  }

  /**
   * Verify hashed value
   * @param plain
   * @param hashed
   */
  verify(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }

  /**
   * Clear Password from payload
   * @param data
   */
  clear<T>(data: Record<string, any>): T {
    const payload = { ...data };
    delete payload.password;
    return payload as T;
  }
}
