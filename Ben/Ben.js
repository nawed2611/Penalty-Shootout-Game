/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ben extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ben-a", "./Ben/costumes/ben-a.svg", { x: 54, y: 69 }),
      new Costume("ben-b", "./Ben/costumes/ben-b.svg", { x: 54, y: 69 }),
      new Costume("ben-c", "./Ben/costumes/ben-c.svg", { x: 73, y: 71 }),
      new Costume("ben-d", "./Ben/costumes/ben-d.svg", { x: 44, y: 71 })
    ];

    this.sounds = [
      new Sound("Goal Cheer", "./Ben/sounds/Goal Cheer.wav"),
      new Sound("Referee Whistle", "./Ben/sounds/Referee Whistle.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "ben-a";
      if (this.mouse.down) {
        this.costume = "ben-b";
      }
      yield;
    }
  }
}
