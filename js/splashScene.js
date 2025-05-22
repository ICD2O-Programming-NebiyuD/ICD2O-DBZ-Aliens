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
    /**
     * This method is the constructor.
     */
    constructor() {
      super({ key: 'splashScene' })
    }
  
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     * before preload() and create().
     */
    init(data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }
  
    /**
     * Can be defined on your own Scenes.
     * Use it to load assets.
     */
    preload() {
      console.log('Splash Scene')
    }
  
    /**
     * Can be defined on your own Scenes.
     * Use it to create your game objects.
     */
    create(data) {
      // pass
    }
  
    /**
     * Should be overridden by your own Scenes.
     * This method is called once per game step while the scene is running.
*/
    update(time, delta) {
      // pass
    }
  }
  
  export default SplashScene
  