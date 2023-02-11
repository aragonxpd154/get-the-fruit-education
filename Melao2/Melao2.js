/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Melao2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("melao", "./Melao2/costumes/melao.png", { x: 276, y: 254 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.direction = 180;
    this.goto(this.random(-250, 200), 180);
    this.visible = true;
    yield* this.wait(this.random(1, 10));
    while (true) {
      this.move(this.random(1, 10));
      if (this.touching(this.sprites["MoneyFeliz"].andClones())) {
        this.stage.vars.count += 1;
        this.visible = false;
      }
      yield;
    }
  }
}
