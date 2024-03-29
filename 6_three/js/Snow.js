// Particle3D class

SnowParticle = function () {

	var material = new THREE.ParticleCanvasMaterial( {

		color: 0xffffff,
		program: function ( context ) {

			context.beginPath();
			context.arc( 0, 0, 1, 0, Math.PI*2, true );
			context.closePath();
			context.fill();

		}

	} );

	THREE.Particle.call( this, material );
	
	//define properties
	this.velocity = new THREE.Vector3(0,-8,0);
	this.velocity.rotateX(randomRange(-45,45)); 
	this.velocity.rotateY(randomRange(0,360)); 
	this.gravity = new THREE.Vector3(0,0,0); 
	this.drag = 1; 
	this.scale.x = this.scale.y = 4;	//methods... 
	
};

SnowParticle.prototype = new THREE.Particle();
SnowParticle.prototype.constructor = SnowParticle;
SnowParticle.prototype.updatePhysics = function() {
	
	this.velocity.multiplyScalar(this.drag); 
	this.velocity.addSelf(this.gravity);
	this.position.addSelf(this.velocity);


};

var TO_RADIANS = Math.PI/180; 

THREE.Vector3.prototype.rotateY = function(angle){
					
	cosRY = Math.cos(angle * TO_RADIANS);
	sinRY = Math.sin(angle * TO_RADIANS);
	
	var tempz = this.z;; 
	var tempx = this.x; 

	this.x= (tempx*cosRY)+(tempz*sinRY);
	this.z= (tempx*-sinRY)+(tempz*cosRY);


};

THREE.Vector3.prototype.rotateX = function(angle){
					
	cosRY = Math.cos(angle * TO_RADIANS);
	sinRY = Math.sin(angle * TO_RADIANS);
	
	var tempz = this.z;; 
	var tempy = this.y; 

	this.y= (tempy*cosRY)+(tempz*sinRY);
	this.z= (tempy*-sinRY)+(tempz*cosRY);


};

THREE.Vector3.prototype.rotateZ = function(angle){
					
	cosRY = Math.cos(angle * TO_RADIANS);
	sinRY = Math.sin(angle * TO_RADIANS);
	
	var tempx = this.x;; 
	var tempy = this.y; 

	this.y= (tempy*cosRY)+(tempx*sinRY);
	this.x= (tempy*-sinRY)+(tempx*cosRY);


};



// returns a random number between the two limits provided 
function randomRange(min, max){
	return ((Math.random()*(max-min)) + min); 
};