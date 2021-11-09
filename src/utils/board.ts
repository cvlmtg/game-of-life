import { DEAD, ALIVE } from '../constants/constants';

// --------------------------------------------------------------------

export type Cell = 0 | 1;
export type Row = Array<Cell>;
export type Grid = Array<Row>;

// --------------------------------------------------------------------

export function iterate(grid: Grid): Grid {
  const Y = grid.length - 1;

  return grid.map((row: Row, y: number): Row => {
    return row.map((cell: Cell, x: number): Cell => {
      /* eslint-disable computed-property-spacing, no-multi-spaces, indent */
      const values = [
        y > 0 ? grid[y - 1][x - 1] : undefined, // top left
        y > 0 ? grid[y - 1][x    ] : undefined, // top
        y > 0 ? grid[y - 1][x + 1] : undefined, // top right
                grid[y    ][x - 1],             // left
                grid[y    ][x + 1],             // right
        y < Y ? grid[y + 1][x - 1] : undefined, // bottom left
        y < Y ? grid[y + 1][x    ] : undefined, // bottom
        y < Y ? grid[y + 1][x + 1] : undefined  // bottom right
      ];
      /* eslint-enable */

      // contiamo quante celle vive abbiamo vicino a quella corrente

      const neighbours = values.reduce<number>((total, value) => {
        return value === ALIVE ? total + 1 : total;
      }, 0);

      // regole:
      // 1) una cellula continua a vivere se intorno ad essa ci sono
      //    o 2 o 3 cellule vive, altrimenti muore
      // 3) se una cellula morta ha vicino 3 cellule vive, allora
      //    torna in vita

      if (cell === ALIVE) {
        return neighbours === 2 || neighbours === 3 ? ALIVE : DEAD;
      }

      return neighbours === 3 ? ALIVE : DEAD;
    });
  });
}

export function hasCells(grid: Grid): boolean {
  return grid.some((row: Row) => row.some((cell: Cell) => cell === ALIVE));
}
