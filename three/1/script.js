let camera, scene, renderer;

init();
animate();

function init(){

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth , window.innerHeight);

    let cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
    let cubeMaterial = new THREE.MeshNormalMaterial();
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.y = -200;
    cube.position.x = -200;

    scene.add(cube);

    let sphereGeometry = new THREE.SphereGeometry( 50, 50, 50);
    let sphereMaterial = new THREE.MeshNormalMaterial();
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    sphere.position.y = 200;
    sphere.position.x = 200;

    scene.add(sphere);

    document.body.appendChild(renderer.domElement);

}

function animate(){
    requestAnimationFrame(animate);

    render();
}

function render(){
    renderer.render(scene, camera);
}
