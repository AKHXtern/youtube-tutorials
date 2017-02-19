let camera, scene, renderer, cube, domEvents;

init();
animate();

function init(){

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(200, 100, 400);

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth , window.innerHeight);

    domEvents = new THREEx.DomEvents(camera, renderer.domElement);

    let cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
    let cubeMaterial = new THREE.MeshBasicMaterial({
        color: 'black',
        wireframe: true
    });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    scene.add(cube);

    domEvents.addEventListener(cube, 'click', function(e){
        cube.material.color = new THREE.Color('red');
    });

    domEvents.addEventListener(cube, 'mouseover', function(e){
        let scaleUp = new TWEEN.Tween(cube.scale).to({x: 1.5, y: 1.5, z: 1.5}, 1000);
        scaleUp.easing(TWEEN.Easing.Elastic.InOut);
        scaleUp.start();
    });

    domEvents.addEventListener(cube, 'mouseout', function(e){
        let scaleDown = new TWEEN.Tween(cube.scale).to({x: 1, y: 1, z: 1}, 1000);
        scaleDown.easing(TWEEN.Easing.Elastic.InOut);
        scaleDown.start();
    });

    document.body.appendChild(renderer.domElement);

}

function animate(){
    requestAnimationFrame(animate);

    render();
}

function render(){
    renderer.render(scene, camera);

    cube.rotation.y += 0.025;

    TWEEN.update();

    camera.lookAt(cube.position);
}
