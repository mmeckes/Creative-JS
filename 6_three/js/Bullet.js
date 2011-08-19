Bullet = function () {
	
	var material = new THREE.MeshBasicMaterial( { color: 0xffff00 });
	var geom = new THREE.CubeGeometry( 10, 10, 300, 1, 1, 1,material);
		
	this.object3D = new THREE.Mesh(geom, material);
		
	this.object3D.overdraw = true;
	this.enabled = true; 
	
	

	this.update = function () {
		
		this.object3D.rotation.z += Math.PI/4;  
		
		this.object3D.position.z -=100; 
		
	};

	
};