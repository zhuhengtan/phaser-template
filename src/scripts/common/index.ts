export const DIRECTIONS = {
  0: 'right',
  1: 'down',
  2: 'left',
  3: 'up',
}

export const SECOND = 1000

export const ONE_ROUND_EQUAL_SECONDS = 30 // 一回合对应的RTS时间

export const DEFAULT_GATHER_SPEED = 4 // 默认的每秒采集速率
export const DEFAULT_MOVE_SPEED = 16 // 默认的每秒移动距离


export const PORTAL_BIRTH_INTERVAL = 3 // 秒
export const MONSTER_WANDER_MOVE_INTERVAL = 3 // 秒

export const RESOURCE_CLASSES = ['Rock', 'Tree']

export const MONSTER_CAN_ATTACT_CLASSES = ['Keep', 'Farmer', 'Hero', 'House', 'Well']

export const GAME_WIDTH = window.innerWidth * 2
export const GAME_HEIGHT = window.innerHeight * 2

export const DEFAULT_ZOOM = GAME_HEIGHT / (16 * 16) // TODO: 要根据宽高来
export const MIN_ZOOM = (horizontalTiles: number) => GAME_WIDTH / (16 * horizontalTiles)
export const MAX_ZOOM = (verticalTiles: number) => GAME_HEIGHT / (16 * Math.min(verticalTiles, 16))