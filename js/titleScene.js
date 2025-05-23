/* global phaser */
// Created by: nebs
// Created on: May 2025
// This is the Title scene for the game

/**
 * This class is the splash scene for the game
 */
class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'titleScene' })
            
        this.titleSceneBackgroundImage = null;
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("ffffff");
    }
  
    preload() {
        console.log('Title Scene')
        this.load.image('titleSceneBackground', 'assets/alien_Screen_Image.jpg');
    }
  
    create(data) {
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground')
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }
  
    update (time, delta) { 
    }
  }
    export default TitleScene