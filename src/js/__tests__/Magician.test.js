import Character from '../Magician';

test('creating Magician', () => {
  const character = new Character('Rumpel', 'Magician');
  const result = {
    name: 'Rumpel',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
