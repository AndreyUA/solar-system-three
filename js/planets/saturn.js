import * as THREE from "three";

const saturnGeometry = new THREE.SphereGeometry(3);
const saturnMaterial = new THREE.MeshBasicMaterial({
  color: 0xceb8b8,
  wireframe: true,
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(180, 0, 0);

export { saturn };
