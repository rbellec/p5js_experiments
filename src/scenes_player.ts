import '../css/style.css';
import {p5} from 'p5js-wrapper';

let sketch1 = function(p) {

    p.setup = () => {
      // canvas size is specified in the CSS file (size of div #scene)
      //   const scene= document.getElementById('scene');
      //   p.createCanvas(scene.clientWidth, scene.clientHeight);
      p.createCanvas(800, 600);
    };
  
    p.draw = () => {
      p.background(100);
      p.fill(255);
      p.noStroke(); 
      p.rectMode(p.CENTER);
      p.rect(p.mouseX, p.mouseY, 50, 50);
  
    };
  }
  
let myp5 = new p5(sketch1, 'scene');