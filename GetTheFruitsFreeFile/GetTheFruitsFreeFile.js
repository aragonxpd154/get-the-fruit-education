/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GetTheFruitsFreeFile extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Get the Fruits_free-file",
        "./GetTheFruitsFreeFile/costumes/Get the Fruits_free-file.png",
        { x: 300, y: 100 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.count = 0;
    this.goto(-4, 93);
    this.visible = true;
    yield* this.wait(3);
    this.visible = false;
  }
}
