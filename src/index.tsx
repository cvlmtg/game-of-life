import 'bootstrap/dist/css/bootstrap.min.css';

import { State } from './records/game-records';
import Game from './containers/game';
import ReactDOM from 'react-dom';
import React from 'react';

// --------------------------------------------------------------------

const node  = document.getElementById('root');
const state = new State();
const app   = (
  <React.StrictMode>
    <Game initialState={state} />
  </React.StrictMode>
);

ReactDOM.render(app, node);
