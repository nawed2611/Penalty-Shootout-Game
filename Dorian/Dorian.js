/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dorian extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dorian-a", "./Dorian/costumes/dorian-a.svg", {
        x: 60,
        y: 65
      }),
      new Costume("dorian-b", "./Dorian/costumes/dorian-b.svg", {
        x: 60,
        y: 65
      }),
      new Costume("dorian-c", "./Dorian/costumes/dorian-c.svg", {
        x: 77,
        y: 67
      }),
      new Costume("dorian-d", "./Dorian/costumes/dorian-d.svg", {
        x: 77,
        y: 53
      })
    ];

    this.sounds = [
      new Sound("basketball bounce", "./Dorian/sounds/basketball bounce.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      yield* this.glide(0.5, this.random(-80, 80), 12);
      yield;
    }
  }
}
