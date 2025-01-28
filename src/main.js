//Edison Chan
//Rocket Patrol : Revolutionary Rocket Raiders' Radical Return Revised 2
//~20 hrs

// ## MODS ##
//
// 5 - implemented mouse control for player movement and LMS to fire

// 5 - implemented timing mechanism that adds and subtracts time for hits and misses respectively

// 3 - display the amount of seconds the player has left (works with the changes in the timer from scoring)

// 5 - new enemy Spaceship "fighter" that goes 1.5x the speed of a normal space ship, and is half the size. If the player hits it, they score 100 points.

// 1 - Implemented 'FIRE' interface from original game

// 1 - enemy spaceships move faster every 30 seconds


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
