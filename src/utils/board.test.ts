import { DEAD, ALIVE } from '../constants/constants';
import { Grid, iterate } from './board';

// --------------------------------------------------------------------
// questi servono solo per migliorare la leggibilità dei test

const X = ALIVE;
const _ = DEAD;

// --------------------------------------------------------------------
// esempi presi da
//
// 1) https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

describe('the iterate function calculates the next generation', () => {
  describe('for still lifes', () => {
    it('block (1)', () => {
      const one: Grid = [
        [ X, X ],
        [ X, X ]
      ];

      expect(iterate(one)).toEqual(one);
    });

    it('block (2)', () => {
      const one: Grid = [
        [ _, _, _, _ ],
        [ _, X, X, _ ],
        [ _, X, X, _ ],
        [ _, _, _, _ ]
      ];

      expect(iterate(one)).toEqual(one);
    });

    it('boat', () => {
      const one: Grid = [
        [ X, X, _, _ ],
        [ X, _, X, _ ],
        [ _, X, _, _ ]
      ];

      expect(iterate(one)).toEqual(one);
    });

    it('beehive', () => {
      const one: Grid = [
        [ _, X, X, _ ],
        [ X, _, _, X ],
        [ _, X, X, _ ]
      ];

      expect(iterate(one)).toEqual(one);
    });
  });

  describe('for oscillators', () => {
    it('blinker', () => {
      const one: Grid = [
        [ _, X, _ ],
        [ _, X, _ ],
        [ _, X, _ ]
      ];

      const two: Grid = [
        [ _, _, _ ],
        [ X, X, X ],
        [ _, _, _ ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(one);
    });

    it('toad', () => {
      const one: Grid = [
        [ _, _, _, _ ],
        [ _, X, X, X ],
        [ X, X, X, _ ],
        [ _, _, _, _ ]
      ];

      const two: Grid = [
        [ _, _, X, _ ],
        [ X, _, _, X ],
        [ X, _, _, X ],
        [ _, X, _, _ ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(one);
    });

    it('beacon', () => {
      const one: Grid = [
        [ X, X, _, _ ],
        [ X, _, _, _ ],
        [ _, _, _, X ],
        [ _, _, X, X ]
      ];

      const two: Grid = [
        [ X, X, _, _ ],
        [ X, X, _, _ ],
        [ _, _, X, X ],
        [ _, _, X, X ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(one);
    });
  });

  describe('spaceships', () => {
    it('glider', () => {
      const one: Grid = [
        [ _, X, _, _ ],
        [ _, _, X, _ ],
        [ X, X, X, _ ],
        [ _, _, _, _ ],
        [ _, _, _, _ ]
      ];

      const two: Grid = [
        [ _, _, _, _ ],
        [ X, _, X, _ ],
        [ _, X, X, _ ],
        [ _, X, _, _ ],
        [ _, _, _, _ ]
      ];

      const three: Grid = [
        [ _, _, _, _ ],
        [ _, _, X, _ ],
        [ X, _, X, _ ],
        [ _, X, X, _ ],
        [ _, _, _, _ ]
      ];

      const four: Grid = [
        [ _, _, _, _ ],
        [ _, X, _, _ ],
        [ _, _, X, X ],
        [ _, X, X, _ ],
        [ _, _, _, _ ]
      ];

      const five: Grid = [
        [ _, _, _, _ ],
        [ _, _, X, _ ],
        [ _, _, _, X ],
        [ _, X, X, X ],
        [ _, _, _, _ ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(three);
      expect(iterate(three)).toEqual(four);
      expect(iterate(four)).toEqual(five);
    });

    it('light-weight spaceship', () => {
      const one: Grid = [
        [ _, _, _, _, _, _, _ ],
        [ X, _, _, X, _, _, _ ],
        [ _, _, _, _, X, _, _ ],
        [ X, _, _, _, X, _, _ ],
        [ _, X, X, X, X, _, _ ],
        [ _, _, _, _, _, _, _ ]
      ];

      const two: Grid = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, X, X, _, _ ],
        [ _, X, X, _, X, X, _ ],
        [ _, X, X, X, X, _, _ ],
        [ _, _, X, X, _, _, _ ]
      ];

      const three: Grid = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, _, _, _, _ ],
        [ _, _, X, X, X, X, _ ],
        [ _, X, _, _, _, X, _ ],
        [ _, _, _, _, _, X, _ ],
        [ _, X, _, _, X, _, _ ]
      ];

      const four: Grid = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, X, X, _, _ ],
        [ _, _, X, X, X, X, _ ],
        [ _, _, X, X, _, X, X ],
        [ _, _, _, _, X, X, _ ],
        [ _, _, _, _, _, _, _ ]
      ];

      const five: Grid = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, X, _, _, X, _ ],
        [ _, _, _, _, _, _, X ],
        [ _, _, X, _, _, _, X ],
        [ _, _, _, X, X, X, X ],
        [ _, _, _, _, _, _, _ ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(three);
      expect(iterate(three)).toEqual(four);
      expect(iterate(four)).toEqual(five);
    });
  });
});
