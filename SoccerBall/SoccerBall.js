/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SoccerBall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("soccer ball", "./SoccerBall/costumes/soccer ball.svg", {
        x: 23,
        y: 22
      })
    ];

    this.sounds = [
      new Sound(
        "basketball bounce",
        "./SoccerBall/sounds/basketball bounce.wav"
      ),
      new Sound("Goal Cheer", "./SoccerBall/sounds/Goal Cheer.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -109);
    while (true) {
      if (this.mouse.down) {
        yield* this.glide(0.25, this.mouse.x, this.mouse.y);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Dorian"].andClones())) {
        yield* this.glide(0.5, 0, -109);
      }
      if (this.y > -2) {
        yield* this.startSound("Goal Cheer");
        yield* this.sayAndWait("GOAL!", 2);
        this.goto(0, -109);
      }
      yield;
    }
  }
}
