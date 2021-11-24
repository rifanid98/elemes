import { Date as DateHelper } from 'sharedkernel/date';

describe('Date', () => {
  const date = new DateHelper();

  it('should generate local date to sql date', () => {
    const today = new Date().toLocaleDateString();
    const result = date.localToSqlDate(today);
    expect(result.split('-').length).toEqual(3);
  });

  it('should get month from sql date', () => {
    const today = '2021-11-15';
    const result = date.getMonthFromSqlDate(today);
    expect(result).toEqual('november');
  });
});
