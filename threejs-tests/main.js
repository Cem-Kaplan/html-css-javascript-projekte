import * as THREE from 'three';

const Kamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const Szene = new THREE.Scene();
const Renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("background_canvas"),
});

Renderer.setPixelRatio(window.devicePixelRatio);
Renderer.setSize(window.innerWidth, window.innerHeight);

Renderer.render(Szene, Kamera);

const Geo = new THREE.BoxGeometry(10, 10, 10, 100,1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xFF6666, wireframe: true});
const block = new THREE.Mesh(Geo, material);

Szene.add(block);