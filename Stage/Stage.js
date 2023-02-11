/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Woods And Bench", "./Stage/costumes/Woods And Bench.png", {
        x: 480,
        y: 360
      }),
      new Costume("Woods And Bench2", "./Stage/costumes/Woods And Bench2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.count = 12;

    this.watchers.count = new Watcher({
      label: "Count:",
      style: "normal",
      visible: true,
      value: () => this.vars.count,
      x: 240,
      y: 180
    });
  }
}
