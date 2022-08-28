const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141525);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
camera.position.set(4, 2.5, 6);
camera.lookAt(0, 1, 1);

const dirLightTop = new THREE.DirectionalLight(0xffffff, 1);
scene.add(dirLightTop);
dirLightTop.castShadow = true;

const rectLight = new THREE.RectAreaLight(0xffffff, 2, 10, 2);
rectLight.position.set(5, 5, 2.5);
rectLight.lookAt(0, 0, 1);
scene.add(rectLight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);
const div = document.getElementById("laptopContainer");
div.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();

loader.load(
  "obj/laptopKeys.glb",
  function (gltf) {
    const obj = gltf.scene;
    scene.add(obj);
  },
  undefined,
  function (error) {
    console.log(error);
  }
);

loader.load(
  "obj/laptopLid.glb",
  function (gltf) {
    const obj = gltf.scene;
    scene.add(obj);
  },
  undefined,
  function (error) {
    console.log(error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
