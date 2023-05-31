import * as THREE from "three";

const neptuneGeometry = new THREE.SphereGeometry(3);
const neptuneMaterial = new THREE.MeshBasicMaterial({
  color: 0x5b5ddf,
  wireframe: true,
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(220, 0, 0);

export { neptune };
