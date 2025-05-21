// This file is part of the RST-ICD2O-DBZ-Aliens project
// Copyright (C) 2025 RST-ICD2O-DBZ-Aliens
// Made by Nebiyu Daniel
// this is the phaser 3 configuration file

/* global Phaser */

//* Game scene */

import SplashScene from './scenes/splash.js';
const splashScene = new SplashScene();

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

const game = new Phaser.Game(config);


//* Game scenes */
game.scene.add('splashScene', splashScene);
//* game title */
game.scene.start('splashScene');