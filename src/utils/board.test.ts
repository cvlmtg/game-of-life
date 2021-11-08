import { DEAD, ALIVE } from '../constants/constants';
import { Board, iterate } from './board';

// --------------------------------------------------------------------
// questi servono solo per migliorare la leggibilità dei test

const X = ALIVE;
const _ = DEAD;

// --------------------------------------------------------------------
// esempi presi da
//
// 1) https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

describe('correctly calculates the next generation', () => {
  describe('for still lifes', () => {
    it('block (1)', () => {
      const one: Board = [
        [ X, X ],
        [ X, X ]
      ];

      expect(iterate(one)).toEqual(one);
    });

    it('block (2)', () => {
      const one: Board = [
        [ _, _, _, _ ],
        [ _, X, X, _ ],
        [ _, X, X, _ ],
        [ _, _, _, _ ]
      ];

      expect(iterate(one)).toEqual(one);
    });

    it('boat', () => {
      const one: Board = [
        [ X, X, _, _ ],
        [ X, _, X, _ ],
        [ _, X, _, _ ]
      ];

      expect(iterate(one)).toEqual(one);
    });

    it('beehive', () => {
      const one: Board = [
        [ _, X, X, _ ],
        [ X, _, _, X ],
        [ _, X, X, _ ]
      ];

      expect(iterate(one)).toEqual(one);
    });
  });

  describe('for oscillators', () => {
    it('blinker', () => {
      const one: Board = [
        [ _, X, _ ],
        [ _, X, _ ],
        [ _, X, _ ]
      ];

      const two: Board = [
        [ _, _, _ ],
        [ X, X, X ],
        [ _, _, _ ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(one);
    });

    it('toad', () => {
      const one: Board = [
        [ _, _, _, _ ],
        [ _, X, X, X ],
        [ X, X, X, _ ],
        [ _, _, _, _ ]
      ];

      const two: Board = [
        [ _, _, X, _ ],
        [ X, _, _, X ],
        [ X, _, _, X ],
        [ _, X, _, _ ]
      ];

      expect(iterate(one)).toEqual(two);
      expect(iterate(two)).toEqual(one);
    });

    it('beacon', () => {
      const one: Board = [
        [ X, X, _, _ ],
        [ X, _, _, _ ],
        [ _, _, _, X ],
        [ _, _, X, X ]
      ];

      const two: Board = [
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
      const one: Board = [
        [ _, X, _, _ ],
        [ _, _, X, _ ],
        [ X, X, X, _ ],
        [ _, _, _, _ ],
        [ _, _, _, _ ]
      ];

      const two: Board = [
        [ _, _, _, _ ],
        [ X, _, X, _ ],
        [ _, X, X, _ ],
        [ _, X, _, _ ],
        [ _, _, _, _ ]
      ];

      const three: Board = [
        [ _, _, _, _ ],
        [ _, _, X, _ ],
        [ X, _, X, _ ],
        [ _, X, X, _ ],
        [ _, _, _, _ ]
      ];

      const four: Board = [
        [ _, _, _, _ ],
        [ _, X, _, _ ],
        [ _, _, X, X ],
        [ _, X, X, _ ],
        [ _, _, _, _ ]
      ];

      const five: Board = [
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
      const one: Board = [
        [ _, _, _, _, _, _, _ ],
        [ X, _, _, X, _, _, _ ],
        [ _, _, _, _, X, _, _ ],
        [ X, _, _, _, X, _, _ ],
        [ _, X, X, X, X, _, _ ],
        [ _, _, _, _, _, _, _ ]
      ];

      const two: Board = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, X, X, _, _ ],
        [ _, X, X, _, X, X, _ ],
        [ _, X, X, X, X, _, _ ],
        [ _, _, X, X, _, _, _ ]
      ];

      const three: Board = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, _, _, _, _ ],
        [ _, _, X, X, X, X, _ ],
        [ _, X, _, _, _, X, _ ],
        [ _, _, _, _, _, X, _ ],
        [ _, X, _, _, X, _, _ ]
      ];

      const four: Board = [
        [ _, _, _, _, _, _, _ ],
        [ _, _, _, X, X, _, _ ],
        [ _, _, X, X, X, X, _ ],
        [ _, _, X, X, _, X, X ],
        [ _, _, _, _, X, X, _ ],
        [ _, _, _, _, _, _, _ ]
      ];

      const five: Board = [
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
