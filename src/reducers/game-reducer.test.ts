import { DEAD, ALIVE } from '../constants/constants';
import * as actions from '../actions/game-actions';
import { State } from '../records/game-records';
import reduce from '../reducers/game-reducer';
import type { Grid } from '../utils/board';
import type { Action } from 'monarc';

// --------------------------------------------------------------------

describe('the game reducer', () => {
  let store: State;

  const dispatch = (action: Action): void => {
    store = reduce(store, action);
  };

  beforeEach(() => {
    store = new State();
  });

  it('resets the tick to zero when loading a preset', () => {
    const preset: Grid = [
      [ DEAD, ALIVE ],
      [ ALIVE, ALIVE ]
    ];

    actions.updateGridSize(dispatch, 8);
    actions.loadPreset(dispatch, preset);
    actions.nextTick(dispatch);

    expect(store.grid.length).toEqual(2);
    expect(store.tick).toEqual(1);

    actions.loadPreset(dispatch, preset);

    expect(store.tick).toEqual(0);
  });

  it('resets the tick to zero when drawing on the board', () => {
    actions.updateGridSize(dispatch, 8);
    actions.drawCell(dispatch, 4, 4);
    actions.drawCell(dispatch, 4, 5);
    actions.drawCell(dispatch, 4, 6);
    actions.nextTick(dispatch);

    expect(store.grid.length).toEqual(8);
    expect(store.tick).toEqual(1);

    actions.drawCell(dispatch, 2, 2);

    expect(store.tick).toEqual(0);
  });
});
