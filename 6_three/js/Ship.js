Ship = function() {

	
	var material = new THREE.MeshLambertMaterial( { color: 0xaaaaaa, shading: THREE.FlatShading });
	var geom = new THREE.SphereGeometry( 100, 15,15 , material);
		
	this.object3D = new THREE.Mesh(geom, material );
		
	this.object3D.overdraw = true;
	this.object3D.scale.y = 0.2; 
	this.enabled = true; 
	
	var targetPos = new THREE.Vector3(0,0,0); 
	var diff = new THREE.Vector3(0,0,0); 
	

	this.update = function (x, y) {
		
		targetPos.set(x * 1.5, y *-1.5, 0); 
		
		
		targetPos.subSelf(this.object3D.position); 
		targetPos.multiplyScalar(0.5); 

		

		this.object3D.position.addSelf(targetPos); 
		this.object3D.rotation.z = targetPos.x* -0.004; 
		this.object3D.rotation.x = targetPos.y* 0.02; 
	};
	

};