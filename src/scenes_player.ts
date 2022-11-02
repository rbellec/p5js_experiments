import "../css/style.css";
import { p5 } from "p5js-wrapper";
import { chapter1ColorScenes } from "./chapter_colors";

let selected_scene = chapter1ColorScenes[0];
let p5_scene = new p5(selected_scene, "scene");