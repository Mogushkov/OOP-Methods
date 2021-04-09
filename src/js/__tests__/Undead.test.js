import Character from '../Undead';

test('creating Undead', () => {
  const character = new Character('Dunkan', 'Undead');
  const result = {
    name: 'Dunkan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
