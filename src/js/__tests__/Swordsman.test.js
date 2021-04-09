import Character from '../Swordsman';

test('creating Swordsman', () => {
  const character = new Character('Conan', 'Swordsman');
  const result = {
    name: 'Conan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
