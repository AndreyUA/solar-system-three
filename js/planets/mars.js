import * as THREE from "three";

const marsGeometry = new THREE.SphereGeometry(3);
const marsMaterial = new THREE.MeshBasicMaterial({
  color: 0xee4b2b,
  wireframe: true,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(120, 0, 0);

export { mars };
