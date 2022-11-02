import { P5Scene } from "./types";

let all_scenes: Array<P5Scene> = [];

const hello_color = function (p) {
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

all_scenes.push({
  book_reference: "p_1_0_01",
  name: "Hello color",
  description: "Concentric squares of complementary color.",
  scene: hello_color
});

export { all_scenes as chapter1ColorScenes };
