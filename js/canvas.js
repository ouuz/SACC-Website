//canvasLOGO
var canvasLOGO = document.getElementById('Logo');
var ctx = canvasLOGO.getContext('2d');
var percent = 0;

// canvasLOGO.style.width = document.documentElement.clientWidth + 'px';
// canvasLOGO.style.height = document.documentElement.clientHeight * 3 + 'px';

Interval()

function drawPartCurve(lineWidth, strokeColor, lineDash, startPonit, endPoint, radian) {
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;
  ctx.setLineDash(lineDash);
  ctx.beginPath();

  drawCurvePath(
    ctx,
    startPonit,
    endPoint,
    radian, percent
  );

  ctx.stroke();

}

function drawCurve() { //画轨迹
  // drawFirstCurve
  drawPartCurve(35, '#e4b0a0', [80, 30], [280, -10], [150, 230], 0.1)
  drawPartCurve(35, '#de8479', [80, 30], [150, 230], [0, 350], 0.1)

  // drawSecondCurve
  drawPartCurve(40, '#8692fe', [110, 50], [580, -10], [405, 400], 0.1)
  drawPartCurve(40, '#96d493', [110, 50], [416, 384], [-100, 900], 0.07)

  // drawThirdCurve
  drawPartCurve(35, '#5f8faa', [140, 50], [1430, -10], [1300, 650], 0.15)
  drawPartCurve(35, '#febc7f', [140, 50], [1300, 649], [550, 1250], 0.15)
  drawPartCurve(35, '#ff9281', [140, 50], [550, 1249], [-100, 1400], 0.1)

  // drawFourthCurve
  drawPartCurve(30, '#cd5dbf', [160, 60], [1880, 550], [1620, 1211], 0.06)
  drawPartCurve(30, '#82fef6', [160, 60], [1621, 1210], [620, 2300], 0.14)
  drawPartCurve(30, '#4f70d9', [160, 60], [620, 2300], [-100, 2600], 0.1)

}

function drawCurvePath(ctx, start, end, curveness, percent) { //贝塞尔曲线
  let cp = [
    (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
    (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
  ];
  ctx.moveTo(start[0], start[1]);
  for (let t = 0; t <= percent / 30; t += 0.01) {
    let x = quadraticBezier(start[0], cp[0], end[0], t);
    let y = quadraticBezier(start[1], cp[1], end[1], t);
    ctx.lineTo(x, y);
  }
}

function quadraticBezier(p0, p1, p2, t) { //贝塞尔曲线方程
  var k = 1 - t;
  return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
}

function drawPlanet(ctx, X, Y, r, start, end, strokeColor, fillColor, lineWidth) { // 画星球
  let arr = []

  for (let i = start * Math.PI; i <= end * Math.PI; i += 10 * (Math.PI / 180)) {
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
  }, 10);
}

function drawCircle() { //画多层色星球
  drawPlanet(ctx, 1340, -440, 100, 0, 2, '#aeadfd', 'transparent', 20)
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
  }, 60)
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
  ctx.lineWidth = 5;
  ctx.beginPath()
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

  let points = [
    [1700, 30, 45, 25, 45, "#d73e5a"],
    [1850, 0, 50, 25, 0, "#d73e5a"],
    [1830, 110, 8, 3, 45, "#d73e5a"],
    [1800, 210, 40, 25, 50, "#d73e5a"],
    [1700, 180, 30, 20, 50, "#d73e5a"],
    [1670, 200, 7, 3, 50, "#d73e5a"],
    [1620, 90, 7, 3, 50, "#d73e5a"],
    [1540, -25, 45, 25, 90, "#d73e5a"],
    [1600, 10, 20, 10, 70, "#d73e5a"],
    [1780, 300, 8, 5, 50, "#d73e5a"],
    [1840, 335, 30, 10, 0, "#d73e5a"],
    [1690, 280, 15, 5, 130, "#d73e5a"],
    [150, 780, 50, 30, 40, "#dba36a"],
    [260, 840, 30, 20, 45, "#dba36a"],
    [410, 1000, 40, 15, 70, "#dba36a"],
    [280, 1030, 80, 30, 80, "#dba36a"],
    [150, 1080, 40, 15, 80, "#dba36a"],
    [400, 1200, 70, 25, 100, "#dba36a"],
    [280, 1400, 60, 20, 130, "#dba36a"],
    [180, 1280, 40, 20, 130, "#dba36a"],
    [0, 850, 50, 30, 45, "#dba36a"],
    [60, 640, 30, 10, 25, "#dba36a"],
    [200, 700, 20, 10, 25, "#dba36a"],
    [0, 655, 40, 10, 90, "#dba36a"],
    [450, 1100, 15, 5, 110, "#dba36a"],
    [250, 880, 8, 3, 50, "#dba36a"],
    [40, 980, 8, 3, 90, "#dba36a"],
    [180, 1500, 30, 15, 150, "#e0ce84"],
    [30, 1120, 40, 18, 120, "#e0ce84"]
  ]

  function rander() {

    if (points.length) {
      let tmpPoint = points.shift();
      ctx.fillStyle = tmpPoint[5];
      ctx.strokeStyle = tmpPoint[5];
      Ellipse(ctx, tmpPoint[0], tmpPoint[1], tmpPoint[2], tmpPoint[3], tmpPoint[4])
    } else {
      points = [];
      clearInterval(a)
      return;
    }
  };

  let a = setInterval(() => {
    rander();
  }, 30);

}

function Interval() {
  var curve = window.setInterval(() => {
    percent++;
    drawCurve()
    if (percent > 30) {
      window.clearInterval(curve)
      drawRedPlanet()
      setTimeout(() => {
        drawPlanet(ctx, 0, 1100, 500, 1.5, 3.5, '#f8f9ad', '#e1cf85', 20)
      }, 500)
      setTimeout(() => {
        drawMeteorites()
      }, 1500)
      setTimeout(() => {
        drawCircle()
      }, 2500);
    }
  }, 10)
}

//canvasGroup
var canvasGroup = document.getElementById('Group');
var context = canvasGroup.getContext('2d');
var Percent = 0;
var curve = null;
canvasGroup.style.width = document.documentElement.clientWidth / 2 + 'px';
canvasGroup.style.height = document.documentElement.clientHeight + 'px';

function drawTeamEye() {
  curve = window.setInterval(() => {
    Percent++;
    Curve()
    if (Percent > 50) {
      window.clearInterval(curve)
      context.setLineDash([80, 20])
      drawPlanet(context, 380, 465, 200, 0, 2, "#f3c6b7", 'transparent', 10)
      setTimeout(() => {
        context.setLineDash([60, 0])
        drawPlanet(context, 380, 465, 150, 0, 2, "#f3c6b7", 'transparent', 10)
      }, 600)
      setTimeout(() => {
        drawPlanet(context, 380, 465, 75, 1, 3, "#f3c6b7", 'transparent', 10)
      }, 1200)
      setTimeout(() => {
        $('#Group').css('left', '0')
        $('.teamRight').css('display', 'flex')
        $('#Group').mousemove((e) => {
          $('.teamLeft').css('top', `${e.pageY / 120 - 40}px`).css('left', `${e.pageX / 120}px`)
        })
      }, 1800)
    }

  }, 10)
}

function Curve() {
  context.lineWidth = 10;
  context.setLineDash([60, 30]);
  context.strokeStyle = "#f3c6b7";
  context.beginPath();

  drawCurvePath(
    context,
    [350, -20],
    [445, 150],
    0, Percent
  );

  context.stroke();

  context.beginPath();

  drawCurvePath(
    context,
    [350, 950],
    [465, 720],
    0, Percent
  );

  context.stroke();
}