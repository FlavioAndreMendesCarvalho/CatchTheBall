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
    balls: getBalls(50),
    moveDuration: 1500, size: 50, changeInterval: 1000, dodgeProbability: 0, color: "#ff5c30"
  },
  {
    balls: getBalls(2),
    moveDuration: 550, size: 90, changeInterval: 350, dodgeProbability: 100, color: "#d16332"
  },
  {
    balls: getBalls(3),
    moveDuration: 500, size: 80, changeInterval: 300, dodgeProbability: 100, color: "#f12b23"
  },
  {
    balls: getBalls(4),
    moveDuration: 500, size: 70, changeInterval: 200, dodgeProbability: 100, color: "#c82201"
  },
  {
    balls: getBalls(5),
    moveDuration: 500, size: 50, changeInterval: 200, dodgeProbability: 100, color: "#b00000"
  },
  {
    balls: getBalls(6),
    moveDuration: 450, size: 40, changeInterval: 200, dodgeProbability: 100, color: "#72140a"
  },
  {
    balls: getBalls(7),
    moveDuration: 300, size: 35, changeInterval: 200, dodgeProbability: 100, color: "#621309"
  },
  {
    balls: getBalls(1),
    moveDuration: 500, size: 50, changeInterval: 250, dodgeProbability: 100, color: "#621309"
  },
  {
    balls: getBalls(10),
    moveDuration: 700, size: 60, changeInterval: 400, dodgeProbability: 100, color: "#621309"
  }
];

export  {normal, hard};
