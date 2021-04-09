import Character from '../Zombie';

test('creating Zombie', () => {
  const character = new Character('Clark', 'Zombie');
  const result = {
    name: 'Clark',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
