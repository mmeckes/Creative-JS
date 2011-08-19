
function Orbiter() {

	this.radius = 100; 
	this.angle = 0; 
	this.rotationSpeed = 0.01; 
	this.generation = 0; 
	this.children = []; 
	

	this.update = function() {
	
	 	this.angle+=this.rotationSpeed; 
	};
	
	this.render = function(c) {

		c.save(); 
		
		c.strokeStyle = "rgba(255,255,255,0.2)"; //white"; 
	
		c.rotate(this.angle, 0); 
		
		c.beginPath(); 
		c.moveTo(0,0); 
		c.lineTo(this.radius,0); 
		c.stroke(); 
		
		c.translate(this.radius,0); 
		
		c.beginPath(); 
		c.arc(0,0,1,0,Math.PI*2,true); 
		c.stroke();
		
		for(var i = 0; i<this.children.length; i++) {
			var child = this.children[i]; 
			child.update(); 
			child.render(c); 
		}
		
	
		c.restore(); 
	};


	this.spawn = function() {
		
		var numChildren = randomRange(0,4); 
		
		for(var i = 0; i<numChildren; i++) {
			
			var child = new Orbiter(); 
			this.children.push(child); 
			
			child.radius = randomRange(5,100); 
			child.rotationSpeed = randomRange(-0.02,0.02); 
			child.generation = this.generation+1; 
			if(this.generation<2) child.spawn(); 
			
		}
		
		
	};
}



function randomRange(min, max) {
	return ((Math.random()*(max-min)) + min); 
}
