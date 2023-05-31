import * as THREE from "three";

const uranusGeometry = new THREE.SphereGeometry(3);
const uranusMaterial = new THREE.MeshBasicMaterial({
  color: 0xd1e7e7,
  wireframe: true,
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(200, 0, 0);

export { uranus };
