Asteroid = function () {
	
	var material = new THREE.MeshLambertMaterial( { color: 0xff0000, shading: THREE.FlatShading });
	var geom = new THREE.CubeGeometry( 200, 200, 200, 1, 1, 1,material);
		
	this.object3D = new THREE.Mesh(geom, material );
		
	this.object3D.overdraw = true;
	this.enabled = true; 
	
	this.xSpin = Math.random() * Math.PI/45;
	this.ySpin = Math.random() * Math.PI/45; 

	this.update = function () {
		
		this.object3D.rotation.y += this.xSpin; 
		this.object3D.rotation.x += this.ySpin; 
		
		this.object3D.position.z +=50; 
		
	};

	
};