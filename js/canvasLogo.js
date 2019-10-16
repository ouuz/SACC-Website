var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var percent = 0;

canvas.style.width = document.documentElement.clientWidth + 'px';
canvas.style.height = document.documentElement.clientHeight * 3 + 'px';

Interval()

function drawCurve() { //画轨迹
  function drawFirstCurve() {
    function one() {
      ctx.lineWidth = 35;
      ctx.strokeStyle = '#cf91d4';
      ctx.setLineDash([80, 30]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [280, -10],
        [150, 230],
        0.1, percent
      );

      ctx.stroke();
    }

    function two() {
      ctx.lineWidth = 35;
      ctx.strokeStyle = '#9c91d5';
      ctx.setLineDash([80, 30]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [150, 230],
        [0, 350],
        0.1, percent
      );

      ctx.stroke();
    }
    one()
    two()
  }

  function drawSecondCurve() {
    function one() {
      ctx.lineWidth = 40;
      ctx.strokeStyle = '#8692fe';
      ctx.setLineDash([110, 50]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [580, -10],
        [405, 400],
        0.1, percent
      );

      ctx.stroke();
    }

    function two() {
      ctx.lineWidth = 40;
      ctx.strokeStyle = '#96d493';
      ctx.setLineDash([110, 50]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [416, 384],
        [-100, 900],
        0.07, percent
      );

      ctx.stroke();
    }
    one()
    two()

  }

  function drawThirdCurve() {
    function one() {
      ctx.lineWidth = 35;
      ctx.strokeStyle = '#8dc6e1';
      ctx.setLineDash([140, 50]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [1430, -10],
        [1300, 650],
        0.15, percent
      );

      ctx.stroke();
    }

    function two() {
      ctx.lineWidth = 35;
      ctx.strokeStyle = '#febc7f';
      ctx.setLineDash([140, 50]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [1300, 649],
        [550, 1250],
        0.15, percent
      );

      ctx.stroke();
    }

    function three() {
      ctx.lineWidth = 35;
      ctx.strokeStyle = '#ff9281';
      ctx.setLineDash([140, 50]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [550, 1249],
        [-100, 1400],
        0.1, percent
      );

      ctx.stroke();
    }
    one()
    two()
    three()
  }

  function drawFourthCurve() {
    function one() {
      ctx.lineWidth = 30;
      ctx.strokeStyle = '#cd5dbf';
      ctx.setLineDash([160, 60]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [1880, 550],
        [1620, 1211],
        0.06, percent
      );

      ctx.stroke();
    }

    function two() {
      ctx.lineWidth = 30;
      ctx.strokeStyle = '#82fef6';
      ctx.setLineDash([160, 60]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [1621, 1210],
        [620, 2300],
        0.14, percent
      );

      ctx.stroke();
    }

    function three() {
      ctx.lineWidth = 30;
      ctx.strokeStyle = '#4f70d9';
      ctx.setLineDash([160, 60]);
      ctx.beginPath();

      drawCurvePath(
        ctx,
        [620, 2300],
        [-100, 2600],
        0.1, percent
      );

      ctx.stroke();
    }

    one()
    two()
    three()
  }

  drawFirstCurve()
  drawSecondCurve()
  drawThirdCurve()
  drawFourthCurve()
}

function drawCurvePath(ctx, start, end, curveness, percent) { //贝塞尔曲线
  let cp = [
    (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
    (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
  ];
  ctx.moveTo(start[0], start[1]);
  for (let t = 0; t <= percent / 50; t += 0.01) {
    let x = quadraticBezier(start[0], cp[0], end[0], t);
    let y = quadraticBezier(start[1], cp[1], end[1], t);
    ctx.lineTo(x, y);
  }
}

function quadraticBezier(p0, p1, p2, t) { //贝塞尔曲线方程
  var k = 1 - t;
  return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
}

function drawPlanet(X, Y, r, start, end, strokeColor, fillColor, lineWidth) { // 画星球
  let arr = []

  for (let i = start * Math.PI; i <= end * Math.PI; i += 2 * (Math.PI / 180)) {
    let x = X + r * Math.cos(i);
    let y = Y + r * Math.sin(i);
    arr.push([x, y]);
  }

  let startPoint = arr.shift();
  ctx.beginPath();
  ctx.moveTo(startPoint[0], startPoint[1]);

  function rander() {
    if (arr.length) {
      ctx.lineWidth = lineWidth;
      ctx.setLineDash([80, 0]);
      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = fillColor;

      let tmpPoint = arr.shift();
      ctx.lineTo(tmpPoint[0], tmpPoint[1]);
      ctx.fill()
      ctx.stroke();
    } else {
      arr = [];
      clearInterval(a)
      return;
    }
  };

  let a = setInterval(() => {
    rander();
  }, 5);
}

function drawCircle() { //画多层色星球
  drawPlanet(1340, -440, 100, 0, 2, '#aeadfd', 'transparent', 20)
  ctx.lineWidth = 20;
  ctx.setLineDash([80, 0]);
  ctx.beginPath();
  ctx.strokeStyle = "transparent";
  ctx.arc(1380, 290, 100, 0, 2 * Math.PI);
  ctx.stroke()
  ctx.clip()
  ctx.rotate(30 * Math.PI / 180)

  let arr = [
    [1150, -335, 400, 20, "#63aaec"],
    [1150, -355, 400, 20, "#7393fa"],
    [1150, -375, 400, 20, "#cdfefb"],
    [1150, -395, 400, 20, "#4cb1e7"],
    [1150, -415, 400, 20, "#71d4fb"],
    [1150, -435, 400, 20, "#d0fefe"],
    [1150, -455, 400, 20, "#7188fa"],
    [1150, -475, 400, 20, "#49b2e9"],
    [1150, -495, 400, 20, "#71ccf9"],
    [1150, -515, 400, 20, "#cdfffe"],
    [1150, -535, 400, 20, "#71ccf9"],
    [1150, -555, 400, 20, "#73ecfd"]
  ]

  let startPoint = arr.shift();
  ctx.beginPath();
  ctx.fillStyle = startPoint[4];
  ctx.fillRect(startPoint[0], startPoint[1], startPoint[2], startPoint[3]);

  let rander = function () {
    if (arr.length) {
      let tmpPoint = arr.shift();
      ctx.fillStyle = tmpPoint[4];
      ctx.fillRect(tmpPoint[0], tmpPoint[1], tmpPoint[2], tmpPoint[3]);
      ctx.stroke();
    } else {
      arr = [];
      clearInterval(a)
      return;
    }
  };
  let a = setInterval(() => {
    rander();
  }, 50)
}

function drawRedPlanet() { //画红色星球
  ctx.stroke();
  let arr = [
    [1500, -100],
    [1450, -50],
    [1540, 40],
    [1545, 65],
    [1549, 90],
    [1560, 110],
    [1570, 130],
    [1571, 180],
    [1600, 190],
    [1660, 270],
    [1670, 305],
    [1720, 320],
    [1730, 330],
    [1740, 350],
    [1760, 345],
    [1920, 370],
    [1920, -50],
    [1500, -100]
  ];

  let startPoint = arr.shift();
  ctx.beginPath();
  ctx.moveTo(startPoint[0], startPoint[1]);

  let rander = function () {
    if (arr.length) {
      ctx.lineWidth = 20;
      ctx.setLineDash([80, 0]);
      ctx.strokeStyle = "#f7caa9";
      ctx.fillStyle = "#ff6f8a";
      ctx.lineJoin = "round";

      let tmpPoint = arr.shift();
      ctx.lineTo(tmpPoint[0], tmpPoint[1]);
      ctx.fill()
      ctx.stroke();
    } else {
      arr = [];
      clearInterval(a)
      return;
    }
  };
  let a = setInterval(() => {
    rander();
  }, 10)
}

function Ellipse(ctx, x, y, a, b, rotation) { //画椭圆
  ctx.beginPath()
  ctx.lineWidth = 5;
  ctx.ellipse(x, y, a, b, rotation * Math.PI / 180, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
}

function drawMeteorites() { // 画陨石
  ctx.lineWidth = 25;
  ctx.fillStyle = "#dba36a"
  ctx.strokeStyle = "#dba36a";
  ctx.lineJoin = "round"
  ctx.beginPath()
  ctx.moveTo(-10, 1000)
  ctx.lineTo(0, 1580)
  ctx.lineTo(190, 1540)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  //黄色星球
  ctx.strokeStyle = "#dba36a";
  ctx.fillStyle = "#dba36a"
  Ellipse(ctx, 150, 780, 50, 30, 40)
  Ellipse(ctx, 260, 840, 30, 20, 45)
  Ellipse(ctx, 410, 1000, 40, 15, 70)
  Ellipse(ctx, 280, 1030, 80, 30, 80)
  Ellipse(ctx, 150, 1080, 40, 15, 80)
  Ellipse(ctx, 400, 1200, 70, 25, 100)
  Ellipse(ctx, 280, 1400, 60, 20, 130)
  Ellipse(ctx, 180, 1280, 40, 20, 130)
  Ellipse(ctx, 0, 850, 50, 30, 45)
  Ellipse(ctx, 60, 640, 30, 10, 25)
  Ellipse(ctx, 200, 700, 20, 10, 25)
  Ellipse(ctx, 0, 655, 40, 10, 90)
  Ellipse(ctx, 450, 1100, 15, 5, 110)
  Ellipse(ctx, 250, 880, 8, 3, 50)
  Ellipse(ctx, 40, 980, 8, 3, 90)
  ctx.strokeStyle = "#e0ce84";
  ctx.fillStyle = "#e0ce84"
  Ellipse(ctx, 180, 1500, 30, 15, 150)
  Ellipse(ctx, 30, 1120, 40, 18, 120)
  //红色星球
  ctx.strokeStyle = "#d73e5a";
  ctx.fillStyle = "#d73e5a"
  Ellipse(ctx, 1700, 30, 45, 25, 45)
  Ellipse(ctx, 1850, 0, 50, 25, 0)
  Ellipse(ctx, 1850, 50, 50, 30, 45)
  Ellipse(ctx, 1830, 110, 8, 3, 45)
  Ellipse(ctx, 1800, 210, 40, 25, 50)
  Ellipse(ctx, 1700, 180, 30, 20, 50)
  Ellipse(ctx, 1670, 200, 7, 3, 50)
  Ellipse(ctx, 1620, 90, 7, 3, 50)
  Ellipse(ctx, 1540, -25, 45, 25, 90)
  Ellipse(ctx, 1600, 10, 20, 10, 70)
  Ellipse(ctx, 1780, 300, 8, 5, 50)
  Ellipse(ctx, 1840, 335, 30, 10, 0)
  Ellipse(ctx, 1690, 280, 15, 5, 130)
  ctx.stroke()
}

function Interval() {
  var curve = window.setInterval(() => {
    percent++;
    drawCurve()
    if (percent > 50) {
      window.clearInterval(curve)
      drawRedPlanet()
      setTimeout(() => {
        drawPlanet(0, 1100, 500, 1.5, 3.5, '#f8f9ad', '#e1cf85', 20)
      }, 200)
      setTimeout(() => {
        drawMeteorites()
      }, 1500)
      setTimeout(() => {
        drawCircle()
      }, 2500);
    }
  }, 10)
}