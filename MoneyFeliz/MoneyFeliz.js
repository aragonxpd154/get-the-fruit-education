/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MoneyFeliz extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("money_feliz", "./MoneyFeliz/costumes/money_feliz.png", {
        x: 128,
        y: 181
      })
    ];

    this.sounds = [
      new Sound(
        "The Backyardigans - Castaways (Letra-Lyrics) [TikTok]",
        "./MoneyFeliz/sounds/The Backyardigans - Castaways (Letra-Lyrics) [TikTok].mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-167, -110);
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(10);
      }
      if (this.keyPressed("left arrow")) {
        this.move(-10);
      }
      yield;
    }
  }

  *messages() {
    if (this.stage.vars.count == 12 || this.stage.vars.count > 12) {
      yield* this.sayAndWait("You ate all the fruit!!", 2);
    } else {
      yield* this.sayAndWait("you didn't make it :(", 2);
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(20);
    yield* this.messages();
  }

  *whenGreenFlagClicked3() {
    yield* this.playSoundUntilDone(
      "The Backyardigans - Castaways (Letra-Lyrics) [TikTok]"
    );
  }
}
