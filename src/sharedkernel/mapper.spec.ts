import { Mapper } from 'src/sharedkernel/mapper';

interface From {
  id: string;
  name: string;
}

interface To {
  name: string;
}

describe('Mapper', () => {
  const mapper = new Mapper();

  it('map', function () {
    const from: From = {
      id: 'id',
      name: 'name',
    };
    const result: To = mapper.map<From, To>(from);
    expect(result).not.toHaveProperty('id');
    expect(result).toHaveProperty('name');
  });
});
