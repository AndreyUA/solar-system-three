import * as THREE from "three";

const mercuryGeometry = new THREE.SphereGeometry(3);
const mercuryMaterial = new THREE.MeshBasicMaterial({
  color: 0x808080,
  wireframe: true,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(50, 0, 0);

export { mercury };
