import { Setting, Field } from "../reversiTypes"

export class Reversi
{
  setting: Setting = {
    player: 'black',
    status: 'boot',
    black: { type: 'player', playerName: 'p1', piece: 2 },
    white: { type: 'player', playerName: 'p2', piece: 2 },
    message: null,
  }

  field: Field = [
    [
      { side: 'none', point: 0},
      { side: 'none', point: 1},
      { side: 'none', point: 2},
      { side: 'none', point: 3},
      { side: 'none', point: 4},
      { side: 'none', point: 5},
      { side: 'none', point: 6},
      { side: 'none', point: 7},
    ],
    [
      { side: 'none', point: 8},
      { side: 'none', point: 9},
      { side: 'none', point: 10},
      { side: 'none', point: 11},
      { side: 'none', point: 12},
      { side: 'none', point: 13},
      { side: 'none', point: 14},
      { side: 'none', point: 15},
    ],
    [
      { side: 'none', point: 16},
      { side: 'none', point: 17},
      { side: 'none', point: 18},
      { side: 'none', point: 19},
      { side: 'none', point: 20},
      { side: 'none', point: 21},
      { side: 'none', point: 22},
      { side: 'none', point: 23},
    ],
    [
      { side: 'none', point: 24},
      { side: 'none', point: 25},
      { side: 'none', point: 26},
      { side: 'white', point: 27},
      { side: 'black', point: 28},
      { side: 'none', point: 29},
      { side: 'none', point: 30},
      { side: 'none', point: 31},
    ],
    [
      { side: 'none', point: 32},
      { side: 'none', point: 33},
      { side: 'none', point: 34},
      { side: 'black', point: 35},
      { side: 'white', point: 36},
      { side: 'none', point: 37},
      { side: 'none', point: 38},
      { side: 'none', point: 39},
    ],
    [
      { side: 'none', point: 40},
      { side: 'none', point: 41},
      { side: 'none', point: 42},
      { side: 'none', point: 43},
      { side: 'none', point: 44},
      { side: 'none', point: 45},
      { side: 'none', point: 46},
      { side: 'none', point: 47},
    ],
    [
      { side: 'none', point: 48},
      { side: 'none', point: 49},
      { side: 'none', point: 50},
      { side: 'none', point: 51},
      { side: 'none', point: 52},
      { side: 'none', point: 53},
      { side: 'none', point: 54},
      { side: 'none', point: 55},
    ],
    [
      { side: 'none', point: 56},
      { side: 'none', point: 57},
      { side: 'none', point: 58},
      { side: 'none', point: 59},
      { side: 'none', point: 60},
      { side: 'none', point: 61},
      { side: 'none', point: 62},
      { side: 'none', point: 63},
    ],
  ]

  constructor() { }
}
