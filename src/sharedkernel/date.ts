import { Injectable } from '@nestjs/common';

@Injectable()
export class Date {
  localToSqlDate(date: string): string {
    const localDate = date.split('/');
    if (localDate.length !== 3) return date;
    return `${Date.addZero(localDate[2])}-${Date.addZero(
      localDate[1],
    )}-${Date.addZero(localDate[0])}`;
  }

  private static addZero(value: string): string {
    return value.length < 2 ? `0${value}` : value;
  }

  getMonthFromSqlDate(date: string): string {
    const months = [
      {
        name: 'january',
        number: '01',
      },
      {
        name: 'february',
        number: '02',
      },
      {
        name: 'march',
        number: '03',
      },
      {
        name: 'april',
        number: '04',
      },
      {
        name: 'may',
        number: '05',
      },
      {
        name: 'june',
        number: '06',
      },
      {
        name: 'july',
        number: '07',
      },
      {
        name: 'august',
        number: '08',
      },
      {
        name: 'september',
        number: '09',
      },
      {
        name: 'october',
        number: '10',
      },
      {
        name: 'november',
        number: '11',
      },
      {
        name: 'desember',
        number: '12',
      },
    ];

    return months.find((month) => {
      return month.number === date.split('-')[1];
    }).name;
  }
}
