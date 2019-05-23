import { asyncComponent } from "../hoc/asyncComponent";

function getBalls(number) {
  const balls = [];
  for (let i = 0; i < number; i++) {
    balls.push(asyncComponent(() => import('./MoveBall')))
  }
  return balls;
}

const normal = [
  {
    balls: getBalls(1),
    moveDuration: 1000, size: 130, changeInterval: 500, dodgeProbability: 20, color: "#FFFF00"
  },
  {
    balls: getBalls(1),
    moveDuration: 1000, size: 110, changeInterval: 500, dodgeProbability: 40, color: "#FFA420"
  },
  {
    balls: getBalls(2),
    moveDuration: 900, size: 110, changeInterval: 400, dodgeProbability: 30, color: "#FF7514"
  },
  {
    balls: getBalls(2),
    moveDuration: 800, size: 100, changeInterval: 400, dodgeProbability: 45, color: "#FF2301"
  },
  {
    balls: getBalls(2),
    moveDuration: 900, size: 70, changeInterval: 500, dodgeProbability: 30, color: "#FE0000"
  },
  {
    balls: getBalls(1),
    moveDuration: 800, size: 120, changeInterval: 350, dodgeProbability: 75, color: "#E72512"
  },
  {
    balls: getBalls(1),
    moveDuration: 600, size: 100, changeInterval: 300, dodgeProbability: 75, color: "#bd2512"
  },
  {
    balls: getBalls(1),
    moveDuration: 600, size: 60, changeInterval: 250, dodgeProbability: 100, color: "#892010"
  }
];

const hard = [
  {
    balls: getBalls(1),
    moveDuration: 900, size: 120, changeInterval: 450, dodgeProbability: 30, color: "#FFFF00"
  },
  {
    balls: getBalls(1),
    moveDuration: 900, size: 100, changeInterval: 400, dodgeProbability: 50, color: "#FFA420"
  },
  {
    balls: getBalls(2),
    moveDuration: 800, size: 100, changeInterval: 350, dodgeProbability: 40, color: "#FF7514"
  },
  {
    balls: getBalls(2),
    moveDuration: 700, size: 90, changeInterval: 300, dodgeProbability: 55, color: "#FF2301"
  },
  {
    balls: getBalls(2),
    moveDuration: 800, size: 60, changeInterval: 400, dodgeProbability: 40, color: "#FE0000"
  },
  {
    balls: getBalls(1),
    moveDuration: 700, size: 110, changeInterval: 250, dodgeProbability: 85, color: "#E72512"
  },
  {
    balls: getBalls(1),
    moveDuration: 500, size: 100, changeInterval: 200, dodgeProbability: 85, color: "#bd2512"
  },
  {
    balls: getBalls(1),
    moveDuration: 500, size: 50, changeInterval: 250, dodgeProbability: 100, color: "#892010"
  },
  {
    balls: getBalls(10),
    moveDuration: 700, size: 60, changeInterval: 400, dodgeProbability: 100, color: "#892010"
  }
];

export  {normal, hard};
