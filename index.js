import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Dorian from "./Dorian/Dorian.js";
import SoccerBall from "./SoccerBall/SoccerBall.js";
import Ben from "./Ben/Ben.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Dorian: new Dorian({
    x: -8.608,
    y: 12,
    direction: 90,
    costumeNumber: 3,
    size: 60,
    visible: true
  }),
  SoccerBall: new SoccerBall({
    x: -77,
    y: 36,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: true
  }),
  Ben: new Ben({
    x: -27,
    y: -84,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
