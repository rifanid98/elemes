import { User } from 'domain/entity/user.entity';
import { AuthPresenter } from 'adapter/presenter/auth.presenter';

describe('AuthPresenter', () => {
  const presenter = new AuthPresenter();

  const user = new User();
  user.id = 1;
  user.name = 'user';
  user.email = 'user@email.com';
  user.password = 'P@ssword';

  it('should parse user data and remove the password', () => {
    const publicUser = presenter.show(user);
    expect(publicUser.hasOwnProperty('password')).toBe(false);
  });

  it('should parse user data and show all data except password', () => {
    const publicUser = presenter.showAll(user);
    expect(publicUser.hasOwnProperty('password')).toBe(false);
    expect(Object.keys(publicUser).length).toBeGreaterThanOrEqual(
      Object.keys(user).length - 1,
    );
  });

  it('should parse user entity class to plain object', () => {
    const plainUser = presenter.json(user);
    expect(plainUser instanceof User).toBe(false);
  });
});
