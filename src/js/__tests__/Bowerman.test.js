import Character from '../Bowerman';

test('creating Bowerman', () => {
  const character = new Character('Robin', 'Bowerman');
  const result = {
    name: 'Robin',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
