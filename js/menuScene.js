/* global phaser */
// Created by: nebs
// Created on: May 2025
// This is the Menu scene for the game

/**
 * This class is the splash scene for the game
 */
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'menuScene' });
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("ffffff");
    }
  
    preload() {
        console.log('Menu Scene');
    }
  
    create (data) {
    }
  
    update (time, delta) { 
    }
  }
    export default MenuScene