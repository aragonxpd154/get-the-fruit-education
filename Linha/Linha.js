/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Linha extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("linha", "./Linha/costumes/linha.png", { x: 231, y: 307 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.direction = 180;
    this.goto(this.random(-250, 220), 180);
    this.visible = true;
    yield* this.wait(this.random(1, 10));
    this.moveAhead();
    while (true) {
      this.move(this.random(4, 6));
      if (this.touching(this.sprites["MoneyFeliz"].andClones())) {
        this.stage.vars.count += 1;
        this.visible = false;
      }
      yield;
    }
  }
}
