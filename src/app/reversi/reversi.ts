export class Reversi
{
  current: {
    status: string,
    p1: {
      type: string,
      side: string,
      piece: number,
    },
    p2: {
      type: string,
      side: string,
      piece: number,
    },
  }

  field: Array<Array<{color: string, point: number}>> = [
    [
      { color: 'none', point: 0},
      { color: 'none', point: 1},
      { color: 'none', point: 2},
      { color: 'none', point: 3},
      { color: 'none', point: 4},
      { color: 'none', point: 5},
      { color: 'none', point: 6},
      { color: 'none', point: 7},
    ],
    [
      { color: 'none', point: 8},
      { color: 'none', point: 9},
      { color: 'none', point: 10},
      { color: 'none', point: 11},
      { color: 'none', point: 12},
      { color: 'none', point: 13},
      { color: 'none', point: 14},
      { color: 'none', point: 15},
    ],
    [
      { color: 'none', point: 16},
      { color: 'none', point: 17},
      { color: 'none', point: 18},
      { color: 'none', point: 19},
      { color: 'none', point: 20},
      { color: 'none', point: 21},
      { color: 'none', point: 22},
      { color: 'none', point: 23},
    ],
    [
      { color: 'none', point: 24},
      { color: 'none', point: 25},
      { color: 'none', point: 26},
      { color: 'white', point: 27},
      { color: 'black', point: 28},
      { color: 'none', point: 29},
      { color: 'none', point: 30},
      { color: 'none', point: 31},
    ],
    [
      { color: 'none', point: 32},
      { color: 'none', point: 33},
      { color: 'none', point: 34},
      { color: 'black', point: 35},
      { color: 'white', point: 36},
      { color: 'none', point: 37},
      { color: 'none', point: 38},
      { color: 'none', point: 39},
    ],
    [
      { color: 'none', point: 40},
      { color: 'none', point: 41},
      { color: 'none', point: 42},
      { color: 'none', point: 43},
      { color: 'none', point: 44},
      { color: 'none', point: 45},
      { color: 'none', point: 46},
      { color: 'none', point: 47},
    ],
    [
      { color: 'none', point: 48},
      { color: 'none', point: 49},
      { color: 'none', point: 50},
      { color: 'none', point: 51},
      { color: 'none', point: 52},
      { color: 'none', point: 53},
      { color: 'none', point: 54},
      { color: 'none', point: 55},
    ],
    [
      { color: 'none', point: 56},
      { color: 'none', point: 57},
      { color: 'none', point: 58},
      { color: 'none', point: 59},
      { color: 'none', point: 60},
      { color: 'none', point: 61},
      { color: 'none', point: 62},
      { color: 'none', point: 63},
    ],
  ];

  constructor(current: any) {
    this.current = current
  };
}