/* global phaser */
// Created by: abdul
// Created on: May 2025
// This is the Menu scene for the game

/**
 * This class is the splash scene for the game
 */
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'menuScene' })
            
        this.menuSceneBackgroundImage = null;
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("AEA04B");
    }
  
    preload() {
        console.log('Menu Scene')
        this.load.image('menuSceneBackground', 'assets/alien_screen_image2.jpg');
    }
  
    create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground');
    this.menuSceneBackgroundImage.x = 1920 / 2;
    this.menuSceneBackgroundImage.y = 1080 / 2;
    }
  
    update (time, delta) { 
    }
  }
    export default MenuScene