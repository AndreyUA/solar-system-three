import * as THREE from "three";

const earthGeometry = new THREE.SphereGeometry(3);
const earthMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(100, 0, 0);

export { earth };
