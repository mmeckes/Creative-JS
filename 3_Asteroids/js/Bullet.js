Bullet = function(x, y, angle) {
	
	var speed = 5; 
	
	var newX = 12 * Math.cos(angle) + x;
	var newY = 12 * Math.sin(angle) + y;
 	
	this.pos = new Vector2(newX,newY);
	this.vel = new Vector2(speed,0);
	this.vel.rotate(angle, true);
	
	//this.vel.x = Math.cos(angle)*speed; 
	//this.vel.y = Math.sin(angle)*speed; 
	
	// instead set Vector with speed and rotate
	
	this.enabled = true; 
	
	this.update = function() {
		
		this.pos.plusEq(this.vel); 
		
	};
	
	this.draw = function(c) {
		c.lineWidth =2; 
		c.strokeStyle = "#fff"; 
		c.beginPath(); 
		c.arc(this.pos.x,this.pos.y,2, 0, Math.PI*2, true); 
		c.stroke();
	
	};
	

	
	
	
};