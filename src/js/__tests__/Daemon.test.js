import Character from '../Daemon';

test('creating Daemon', () => {
  const character = new Character('Bobin', 'Daemon');
  const result = {
    name: 'Bobin',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
