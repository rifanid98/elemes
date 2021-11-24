import {
  ContinueException,
  NotModifiedException,
} from 'sharedkernel/nest/exception';

describe('Exception', () => {
  describe('NotModifiedException', () => {
    it('should throw NotModifiedException', async () => {
      const notModifiedException = () => {
        throw new NotModifiedException();
      };

      expect(notModifiedException).toThrow(NotModifiedException);
    });

    it('should throw NotModifiedException with some message', () => {
      const message = 'Not Modified';

      const notModifiedException = (message: string) => {
        throw new NotModifiedException(message);
      };

      try {
        notModifiedException(message);
      } catch (e) {
        expect(e.message).toEqual(message);
      }
    });
  });

  describe('ContinueException', () => {
    it('should throw ContinueException', async () => {
      const continueException = () => {
        throw new ContinueException();
      };

      expect(continueException).toThrow(ContinueException);
    });

    it('should throw ContinueException with some message', () => {
      const message = 'Not Modified';

      const continueException = (message: string) => {
        throw new ContinueException(message);
      };

      try {
        continueException(message);
      } catch (e) {
        expect(e.message).toEqual(message);
      }
    });
  });
});
