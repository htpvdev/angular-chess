/**  */
export type side = 'black'|'white'

/**  */
export type pieceSide = side|'none'

/**  */
export type status = 'boot'|'playing'|'overed'

/**  */
export type playerType = 'player'|'cpu'

/**  */
export interface setting {
  player: side,
  status: status,
  black: { type: playerType, playerName: string, piece: number },
  white: { type: playerType, playerName: string, piece: number },
  message: null|string
}

/**  */
export type field = Array<Array<{side: pieceSide, point: number}>>

/**  */
export interface ReversiType {
  setting: setting,
  field: field,
}