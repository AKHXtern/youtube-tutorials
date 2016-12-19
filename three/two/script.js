let camera, scene, renderer,
    objects = [], back;

init();
animate();

function init(){

    // -- three.js world -- //

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    camera.position.y = 200;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth , window.innerHeight);

    document.body.appendChild(renderer.domElement);

    let planeG = new THREE.PlaneGeometry(1000, 1000, 1000);
    let planeM = new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide
    });
    objects[0] = new THREE.Mesh(planeG, planeM);
    objects[0].rotation.x = Math.PI/2;
    objects[0].position.y = -100;

    let sphereG = new THREE.SphereGeometry(100, 50, 50);
    let sphereM = new THREE.MeshNormalMaterial();
    objects[1] = new THREE.Mesh(sphereG, sphereM);
    objects[1].position.x = 300;

    let sphereG2 = new THREE.SphereGeometry(100, 6, 6);
    let sphereM2 = new THREE.MeshNormalMaterial({
        wireframe: true
    });
    objects[2] = new THREE.Mesh(sphereG2, sphereM2);
    objects[2].position.x = -300;

    let cylG = new THREE.CylinderGeometry(50, 50, 200, 30);
    let cylM = new THREE.MeshBasicMaterial({
        color: 'yellow'
    });
    objects[3] = new THREE.Mesh(cylG, cylM);

    let loader = new THREE.TextureLoader();

    loader.load('back.jpg', function(texture){

        let backG = new THREE.SphereGeometry(5000, 100, 100);
        let backM = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
        back = new THREE.Mesh(backG, backM);

        scene.add(back);

    });

    objects.forEach(function(object){
        scene.add(object);
    });

}
function animate(){
    requestAnimationFrame(animate);
    render();
}

function render(){
    renderer.render(scene, camera);

    objects[3].rotation.x += 0.025;
    objects[3].rotation.z += 0.015;

    objects[2].rotation.x += 0.5;

    camera.position.x += 2;
    camera.position.y += 2;
    camera.lookAt(objects[3].position)

    back.rotation.y += 0.025;
}
