class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame)
  
      // add object to existing scene
      this.sfxShot = scene.sound.add('sfx-shot')
      scene.add.existing(this)
      this.isFiring = false
      this.speed = 2
    }

    update() {
        if(!this.isFiring) {
            // if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
            //     this.x -= this.speed
            // } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize + this.width) {
            //     this.x += this.speed
            // }

            if(game.input.mousePointer.x < borderUISize + this.width) {
                this.x = borderUISize
            } else if(game.input.mousePointer.x > game.config.width - borderUISize + this.width) {
                this.x = game.config.width - borderUISize
            } else {
                this.x = game.input.mousePointer.x;
            }
            if(keyFIRE) {
                this.isFiring = true
                this.sfxShot.play()
            }
        }



        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.speed
        }

        if(this.y <= borderUISize * 3 +borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
            this.scene.changeTime(game.settings.missTime)

        }
    }

    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
  }