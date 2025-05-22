/* global Phaser */

/*
 * Copyright (c) 2020 Mr Coxall All rights reserved
 *
 * Created by: Mr Coxall
 * Created on: Sep 2020
 * This is the Splash Scene
 */

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
    constructor () {
      super({ key: 'splashScene' })
    }
  
    init (data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload () {
      console.log('Splash Scene')
    }
  
    create (data) {
      // pass
    }
  
    update (time, delta) {
      // pass
    }
  }
  
  export default SplashScene
  