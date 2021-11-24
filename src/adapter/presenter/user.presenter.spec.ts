import { User } from 'domain/entity/user.entity';
import { UserPresenter } from 'adapter/presenter/user.presenter';

describe('UserPresenter', () => {
  it('should parse user data and remove the password', () => {
    const presenter = new UserPresenter();
    const user = new User();
    user.id = 1;
    user.name = 'user';
    user.email = 'user@email.com';
    user.password = 'P@ssword';

    const publicUser = presenter.show(user);
    expect(publicUser.hasOwnProperty('password')).toBe(false);
  });
});
