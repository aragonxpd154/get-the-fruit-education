import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Apple from "./Apple/Apple.js";
import Linha from "./Linha/Linha.js";
import Melancia from "./Melancia/Melancia.js";
import Melao from "./Melao/Melao.js";
import MoneyFeliz from "./MoneyFeliz/MoneyFeliz.js";
import GetTheFruitsFreeFile from "./GetTheFruitsFreeFile/GetTheFruitsFreeFile.js";
import Apple2 from "./Apple2/Apple2.js";
import Linha2 from "./Linha2/Linha2.js";
import Apple3 from "./Apple3/Apple3.js";
import Melao2 from "./Melao2/Melao2.js";
import Melancia2 from "./Melancia2/Melancia2.js";
import Melancia3 from "./Melancia3/Melancia3.js";
import Melao3 from "./Melao3/Melao3.js";
import Linha3 from "./Linha3/Linha3.js";
import Melancia4 from "./Melancia4/Melancia4.js";
import Melancia5 from "./Melancia5/Melancia5.js";
import Melao4 from "./Melao4/Melao4.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Apple: new Apple({
    x: 138,
    y: -180,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 17
  }),
  Linha: new Linha({
    x: -62,
    y: -180,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 16
  }),
  Melancia: new Melancia({
    x: 149,
    y: -183,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 11
  }),
  Melao: new Melao({
    x: 52,
    y: -181,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 6
  }),
  MoneyFeliz: new MoneyFeliz({
    x: -257,
    y: -110,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1
  }),
  GetTheFruitsFreeFile: new GetTheFruitsFreeFile({
    x: -4,
    y: 93,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 2
  }),
  Apple2: new Apple2({
    x: -89,
    y: -180,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 13
  }),
  Linha2: new Linha2({
    x: 144,
    y: -180,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 14
  }),
  Apple3: new Apple3({
    x: 213,
    y: -180,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 15
  }),
  Melao2: new Melao2({
    x: -89,
    y: -181,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 3
  }),
  Melancia2: new Melancia2({
    x: 134,
    y: -183,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 7
  }),
  Melancia3: new Melancia3({
    x: 26,
    y: -183,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 9
  }),
  Melao3: new Melao3({
    x: -140,
    y: -181,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 4
  }),
  Linha3: new Linha3({
    x: -200,
    y: -180,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 12
  }),
  Melancia4: new Melancia4({
    x: 21,
    y: -183,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 8
  }),
  Melancia5: new Melancia5({
    x: 197,
    y: -183,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 10
  }),
  Melao4: new Melao4({
    x: -67,
    y: -181,
    direction: 180,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
