import * as actions from '../actions/game-actions';
import { render } from '@testing-library/react';
import { State } from '../records/game-records';
import reduce from '../reducers/game-reducer';
import Instructions from './instructions';
import type { Action } from 'monarc';

// --------------------------------------------------------------------

describe('the Instructions component', () => {
  let store: State;

  const dispatch = (action: Action): void => {
    store = reduce(store, action);
  };

  beforeEach(() => {
    store = new State();
  });

  it('tells us to select a grid size (step 1)', () => {
    const { container } = render(<Instructions store={store} />);

    const muted  = container.querySelectorAll('.text-muted');
    const strong = container.querySelectorAll('strong');
    const first  = strong[0];

    // la prima cosa da fare è scegliere la dimensione della griglia

    expect(store.size).toEqual(0);
    expect(muted.length).toEqual(2);
    expect(strong.length).toEqual(1);
    expect(first.innerHTML).toEqual('Select the grid size');
  });

  it('tells us to draw on the grid (step 2)', () => {
    actions.updateGridSize(dispatch, 8);

    const { container } = render(<Instructions store={store} />);

    const muted  = container.querySelectorAll('.text-muted');
    const strong = container.querySelectorAll('strong');
    const first  = strong[0];

    // una volta impostata la dimensione della griglia
    // passiamo allo step che ci invita a disegnare
    // lo stato iniziare della simulazione

    expect(store.size).toEqual(8);
    expect(muted.length).toEqual(1);
    expect(strong.length).toEqual(1);
    expect(first.innerHTML).toEqual('Draw on the grid');
  });

  it('tells us to start the simulation (step 3)', () => {
    actions.updateGridSize(dispatch, 8);
    actions.drawCell(dispatch, 4, 4);

    const { container } = render(<Instructions store={store} />);

    const muted  = container.querySelectorAll('.text-muted');
    const strong = container.querySelectorAll('strong');
    const first  = strong[0];

    // quando abbiamo almeno una cella sulla griglia
    // possiamo far partire la simulazione

    expect(store.size).toEqual(8);
    expect(muted.length).toEqual(0);
    expect(strong.length).toEqual(1);
    expect(first.innerHTML).toEqual('Start the simulation');
  });
});
