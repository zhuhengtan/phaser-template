import BoardPlugin from 'phaser3-rex-plugins/plugins/board-plugin.js'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'
import Board from 'phaser3-rex-plugins/plugins/board/board/Board'

export type SceneWithRex = Phaser.Scene & {
  rexUI?: RexUIPlugin
  rexBoard?: BoardPlugin
  
  board?: Board
}
