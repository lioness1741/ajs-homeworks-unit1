import getStatus from '../app';

const hero1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const hero2 = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 10 },
  { name: 'лучник', health: 80 },
];

const hero3 = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];


test('sorting hero1', () => {
  expect(hero1.sort(getStatus)).toEqual(hero1);
});

test('sorting hero2', () => {
  expect(hero2.sort(getStatus)).toEqual(hero2);
});

test('sorting hero3', () => {
  expect(hero3.sort(getStatus)).toEqual(hero3);
});
