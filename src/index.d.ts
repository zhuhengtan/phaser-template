declare module "*.json"

interface Resource {
  type: string
  key: string
  path: string
  frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig
}

type Direction = 'right' | 'left' | 'up' | 'down'
type ResourceType = 'rock' | 'wood' | 'food' | 'coin'

const enum GameMode {
  Classic = 'classic',
  KeepDefence = 'keep-defence',
  Story = 'story',
}

const enum UpgradeCondition {
  CanNotUpgrade,
  HaveNextLevelConfig,
  NoNextLevelConfig,
}

interface AnimationConfig {
  [key: string]: Omit<Phaser.Types.Animations.Animation, 'frames'> & Omit<Phaser.Types.Animations.GenerateFrameNumbers, 'frames'> & {
    frames?: number[]
  }
}

interface ResourceConfig {
  [key: string]: {
    path: string
    tileName?: string
    frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig
    type?: ResourceType
    initialIndex?: number
    initValue?: number // 资源初始数量
    maxValue?: number // 资源成熟后最大数量
    subResource?: {
      [key: string]: {
        initialIndex: number
        grow?: number[]
        growTime?: number // 资源成熟时间，表示回合数，经典模式中转换为时长
        consume?: number[]
      }
    }
    animations?: {
      [key: string]: Omit<Phaser.Types.Animations.Animation, 'frames'> & Omit<Phaser.Types.Animations.GenerateFrameNumbers, 'frames'> & {
        frames?: number[]
      }
    }
    frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig
  }
}

interface MapConfig {
  [key: string]: {
    player: {
      resource: {
        rock: number
        wood: number
        food: number
        coin: number
      }
      buildings: {
        [key: string]: {
          position: TileXYZType
        }[]
      }
      creatures: {
        [key: string]: {
          position: TileXYZType
        }[]
      }
    }
    map: {
      buildings?: {
        [key: string]: {
          position: TileXYZType
        }[]
      }
      creatures?: {
        [key: string]: {
          position: TileXYZType
        }[]
      }
      resources: {
        [name: string]: {
          type: string
          position: TileXYZType
        }[]
      }
    }
  }
}

interface BuildingSaveItemConfig {
  className: string
  position: TileXYZType
  type: string
  level: number
  id?: string
  health?: number
  holyWater?: number
}

interface CreatureSaveItemConfig {
  className: string
  position: TileXYZType
  level: number
  id?: string
  health?: number
}

interface MonsterSaveItemConfig {
  className: string
  position: TileXYZType
  type: string
  id?: string
  health?: number
}

interface ExistingResourceSaveItemConfig {
  className: string
  position: TileXYZType
  type: string
  stock: number
  id: string
}

interface GrowthResourceSaveItemConfig {
  className: string
  position: TileXYZType
  currentStock: number
  stock: number
  id: string
}