import * as THREE from "three";

const jupiterGeometry = new THREE.SphereGeometry(3);
const jupiterMaterial = new THREE.MeshBasicMaterial({
  color: 0xe3dccb,
  wireframe: true,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(150, 0, 0);

export { jupiter };
