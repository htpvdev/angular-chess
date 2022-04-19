/**  */
export type currentPlayer = 'p1'|'p2'
/**  */
export type status = 'boot'|'playing'|'overed'

/**  */
export type side =  'black'|'white'|'none'

/**  */
export type playerType = 'player'|'cpu'

/**  */
export interface setting {
  player: currentPlayer,
  status: status,
  p1: { type: playerType, side: side, piece: number },
  p2: { type: playerType, side: side, piece: number },
}

/**  */
export type field = Array<Array<{side: side, point: number}>>

/**  */
export interface ReversiType {
  setting: setting,
  field: field,
}