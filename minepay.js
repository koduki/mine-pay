function drawCanvas() {
  const image = document.getElementById("minepay");

  // create canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.id = image.id;
  canvas.width = image.width;
  canvas.height = image.height;

  const data = new Image();
  data.src = image.src;
  data.onload = () => ctx.drawImage(data, 0, 0, image.width, image.height);

  // replase
  image.parentNode.replaceChild(canvas, image);
}

function init() {
  const worker = new Worker('worker.js');
  worker.addEventListener('message', function (e) {
    document.getElementById('result').textContent = e.data;
  }, false);
  worker.postMessage({ 'cmd': 'start' });
  drawCanvas();
}

document.addEventListener('DOMContentLoaded', () => init());