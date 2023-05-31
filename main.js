import "./style.css";
import * as THREE from "three";
import { sun } from "./js/planets/sun.js";
import { earth } from "./js/planets/earth.js";
import { mercury } from "./js/planets/mercury.js";
import { venus } from "./js/planets/venus.js";
import { mars } from "./js/planets/mars.js";
import { jupiter } from "./js/planets/jupiter.js";
import { saturn } from "./js/planets/saturn.js";
import { uranus } from "./js/planets/uranus.js";
import { neptune } from "./js/planets/neptune.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1_000
);

camera.position.set(80, 0, 150);

scene.add(sun);
scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(saturn);
scene.add(uranus);
scene.add(neptune);

const animate = () => {
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
