const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2080, 2080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.08;

    let x, y;

    const num = 50;
    const radius = width * 0.3;

    for (i = 0; i < num; i++) {
      const slice = math.degToRad(300 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(-0.1, 2), random.range(0.2, -3));

      context.fillStyle = "#3CDBC0  ";
      context.beginPath();
      context.rect(-w / 5, random.range(0, -h * 0.3), w, h);
      context.fill();

      context.restore();

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(-0.1, 2), random.range(-3, 3));

      context.fillStyle = "#211551";
      context.beginPath();
      context.rect(-w / 2, random.range(0, -h * 0.4), w, h);
      context.fill();

      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 18);

      context.strokeStyle = "#0047BB";
      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.2),
        slice * random.range(1, -5),
        slice * random.range(1, 10)
      );
      context.stroke();

      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(2, 10);

      context.strokeStyle = "#E31C79    ";
      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.2, 1),
        slice * random.range(1, -5),
        slice * random.range(1, 10)
      );
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
