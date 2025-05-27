/* global phaser */
// Created by: abdul
// Created on: May 2025
// This is the Game scene for the game

import TitleScene from "./titleScene";

/**
 * This class is the splash scene for the game
 */
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' })

        this.background = null
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("#ffffff");
    }
  
    preload() {
        console.log('Game Scene')

        this.preload.image('starBackground', 'assets/starBackground.png')

    }
  
    create(data) {
        this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
        this.background.setOrigin(0, 0)
    }
  
    update (time, delta) { 
    }
  }
    export default GameScene