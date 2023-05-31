import * as THREE from "three";

const venusGeometry = new THREE.SphereGeometry(3);
const venusMaterial = new THREE.MeshBasicMaterial({
  color: 0xd3d3d3,
  wireframe: true,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(80, 0, 0);

export { venus };
