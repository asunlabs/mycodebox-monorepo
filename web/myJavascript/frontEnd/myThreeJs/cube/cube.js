// Basic elements in Three.js : 1) scene 2) camera 3) renderer 
// renders a scene with camera. 

const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load('bg.jpg')

// THREE.PerspectiveCamera(field of view, aspect ratio, near, far)
// 1) field of view : the extent of the scence seen on display (in degrees)
// 2) window.innerWidth : viewport width in number(int)
// 3) near/far : camera sight outline. 
// if object far away than 'far' => not shown
// if object close than 'near' => not shown 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// WebGL used, other renderers used for fallback for older browsers
const renderer = new THREE.WebGLRenderer();

// renderer.setSize set rendering size.
renderer.setSize( window.innerWidth, window.innerHeight ); // decrease this value if the app is performance-intensive
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xffff } );
// const texture = new THREE.TextureLoader().load('cat2.jpg');
const cube = new THREE.Mesh( geometry, material ); // material ===(mesh)===> geometry
const cube2 = new THREE.Mesh( geometry, material ); // material ===(mesh)===> geometry
const cube3 = new THREE.Mesh( geometry, material ); // material ===(mesh)===> geometry
const cube4 = new THREE.Mesh( geometry, material ); // material ===(mesh)===> geometry

// scene.add : adds element to the scene. Will be added to coordinates (0,0,0)
scene.add( cube ); 
cube.translateX(3); // Object.translateX/Y/Z : moves object in X/Y/Z axis
cube.rotateX(180);

// add new cubes
scene.add(cube2); 
scene.add(cube3); 
scene.add(cube4); 

// move camera : camera.position.x/y/z 
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    // cube 1
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    // cube 2
    cube2.translateX(-0.01);
    cube2.translateY(0.01);
    cube2.translateZ(0.01);
    
    // cube 3
    cube3.translateZ(0.05);
    cube3.rotateX(0.02);

    // cube 4
    cube4.translateZ(-0.05);
    cube4.translateY(-0.02);
    cube4.translateX(-0.02);
	renderer.render( scene, camera );
}

animate();

