const PLAYER_RES: Resource[] = [
  { type: 'spritesheet', key: 'selector', path: 'assets/common/selector.png', frameConfig: { frameWidth: 16 } },
  {
    type: 'spritesheet',
    key: 'icons',
    path: 'assets/common/icons.png',
    frameConfig: { frameWidth: 16, frameHeight: 16 }
  },

  // tiles
  { type: 'image', key: 'tile-grass', path: 'assets/map/tiles/ground/grass.png' },
  { type: 'image', key: 'tile-cliff', path: 'assets/map/tiles/ground/cliff.png' },
  { type: 'image', key: 'tile-cliff-water', path: 'assets/map/tiles/ground/cliff-water.png' },
  { type: 'image', key: 'tile-dead-grass', path: 'assets/map/tiles/ground/dead-grass.png' },
  { type: 'image', key: 'tile-shore', path: 'assets/map/tiles/ground/shore.png' },
  { type: 'image', key: 'tile-textured-grass', path: 'assets/map/tiles/ground/textured-grass.png' },
  { type: 'image', key: 'tile-winter', path: 'assets/map/tiles/ground/winter.png' }
]

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preload-scene' })
  }

  preload() {
    PLAYER_RES.forEach(res => {
      switch (res.type) {
        case 'image':
          this.load.image(res.key, res.path)
          break
        case 'spritesheet':
          this.load.spritesheet(res.key, res.path, res.frameConfig)
          break
        default:
          break
      }
    })
  }

  create() {
    this.scene.start('start-scene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
