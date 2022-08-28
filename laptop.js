const canvas = document.getElementById("laptopContainer");
const engine = new BABYLON.Engine(canvas, true);

BABYLON.SceneLoader.Load("obj/", "LaptopFull.glb", engine, function (scene) {
  scene.createDefaultCameraOrLight(true, true, true);

  engine.runRenderLoop(() => scene.render());
});
