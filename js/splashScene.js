/* global phaser */
// Created by: nebs
// Created on: May 2025
// This is the splash scene for the game

/**
 * This class is the splash scene for the game
 */
class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: 'splashScene' });
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("ffffff");
    }
  
    preload() {
        console.log('Splash Scene')
        this.load.image('splashSceneBackground', './assets/splashSceneImage.png');
    }
  
    create(data) {
        this.splashSceneBackground = this.add.sprite(0, 0, 'splashSceneBackground')
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.x = 1080 / 2
    }
  
    update (time, delta) { this.scene.switch('titleScene');
    }
  }
    export default SplashScene