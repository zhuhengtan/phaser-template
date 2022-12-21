import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'
import { t } from '../utils/translate'

const createBtn = (scene, title) => {
  return scene.rexUI.add.label({
    width: 400,
    height: 80,
    background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 'white'),
    text: scene.add.text(0, 0, t(title), {
      fontSize: 24
    }),
    align: 'center'
  })
}

const MODES = [
  // { label: t(`Game mode ${GameMode.Classic}`), scene: 'classic-mode-settings-scene' },
  { label: t(`Game mode ${GameMode.KeepDefence}`), scene: 'keep-defence-mode-settings-scene' },
  // { label: 'Conquer', scene: '' }
]

export default class StartScene extends Phaser.Scene {
  rexUI: RexUIPlugin

  constructor() {
    super({ key: 'start-scene' })
  }

  create() {
    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY - 200, t('Project Unnamed'), {
        color: '#000000',
        fontSize: '40px',
        fontStyle: 'bold'
      })
      .setOrigin(0.5, 0.5)

    const btns = this.rexUI.add
      .buttons({
        x: this.cameras.main.centerX,
        y: this.cameras.main.centerY,
        anchor: {
          centerX: '50%',
          centerY: '50%'
        },
        orientation: 'y',

        buttons: [...MODES.map(item => createBtn(this, item.label)), createBtn(this, 'Load Game')],
        space: { item: 20 }
      })
      .layout()
      .on('button.click', (button, index, pointer, event) => {
        if (index < MODES.length) {
          this.scene.start(MODES[index].scene)
        }
        if(index === MODES.length) {
          this.scene.start('load-scene')
        }
      })
//      this.scene
//        .start('load-scene')
    // this.scene
    //   .start('keep-defence-main-scene', {
    //     map: 'keep-defence-small',
    //     hero: 'zhinja',
    //     // saveId: '123',
    //   })
    //   .launch('keep-defence-mode-gaming-ui')
  }
}
