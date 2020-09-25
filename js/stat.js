'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  var maxTime = getMaxElement(times);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + GAP + TEXT_WIDTH);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';

    ctx.fillText(
        players[i],
        CLOUD_X + GAP * 5 + (TEXT_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP
    );

    ctx.fillText(
        times[i] = Math.round(times[i]),
        CLOUD_X + GAP * 5 + (TEXT_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - GAP
    );

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'hsl(0, 100% , 50%)';
    } else {
      ctx.fillStyle = 'hsl(255, ' + Math.random() * 100 * i + '% , 50%)';
    }

    ctx.fillRect(
        CLOUD_X + GAP * 5 + (TEXT_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
