 

let exemple_1 = function (p) {
  p.setup = () => {
    p.createCanvas(720, 720);

    p.noCursor();

    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = () => {
    p.background(p.mouseY / 2, 100, 100);
    p.fill(360 - p.mouseY / 2, 100, 100);
    p.rect(360, 360, p.mouseX + 1, p.mouseX + 1);
  };
};

let scenes_by_name = new Map<string, Function>([
    ["p_1_0_01", exemple_1]
]);