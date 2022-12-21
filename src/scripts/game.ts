import 'phaser'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js'
import BoardPlugin from 'phaser3-rex-plugins/plugins/board-plugin.js'
import AnchorPlugin from 'phaser3-rex-plugins/plugins/anchor-plugin'

import PreloadScene from './scenes/preload'
import StartScene from './scenes/start'
import { GAME_HEIGHT, GAME_WIDTH } from './common'

const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  scene: [
    PreloadScene,
    StartScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  plugins: {
    scene: [
    ]
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
