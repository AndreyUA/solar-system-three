import * as THREE from "three";

const sunGeometry = new THREE.SphereGeometry(10);
const sunMaterial = new THREE.MeshBasicMaterial({
  color: 0xffea00,
  wireframe: true,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(0, 0, 0);

export { sun };
