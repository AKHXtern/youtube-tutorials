let camera, scene, renderer,
    objects = [], back, clock = new THREE.Clock();

init();
animate();

function init(){

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    // camera.rotation.z = Math.PI;

    camera.position.set(0, 100, 200);

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth , window.innerHeight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;

    scene.add(new THREE.AmbientLight(0x666666))

    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(300, 300, 100);

    light.castShadow = true;

    let d = 100;

    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;

    scene.add(light);

    let loader = new THREE.ColladaLoader();

    loader.load('assets/avatar.dae', function(collada){

        collada.scene.traverse(function(child){
            if(child instanceof THREE.SkinnedMesh) {

                let animation = new THREE.Animation(child, child.geometry.animation);
                animation.play();

                child.rotation.x = -Math.PI/2;
                child.castShadow = true;
                child.receiveShadow = true;

                child.scale.set(50, 50, 50);
            }
        })

        scene.add(collada.scene);
    });

    let planeG = new THREE.PlaneGeometry(500, 500, 500);
    let planeM = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('assets/road.png')
    });
    let plane = new THREE.Mesh(planeG, planeM);
    plane.rotation.x = -Math.PI/2;

    plane.receiveShadow = true;

    scene.add(plane);

    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);

    render();
}

function render(){
    renderer.render(scene, camera);

    THREE.AnimationHandler.update(clock.getDelta());
}
