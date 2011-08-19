ShipMoving = function(x,y) {


	this.drawCount = 0;
	
	this.pos = new Vector2(x,y); 
	this.angle = 0; 
	this.vel = new Vector2(0,0); 
	this.temp = new Vector2(0,0); 
	
	this.thrustPower = 0.4; 
	this.rotateSpeed = 10; 
	
	this.thrustSize = 0;

	this.update = function() {
		this.pos.plusEq(this.vel);
		if(this.thrustSize > 0){
			this.thrustSize --;
		}
		 	
	};
	
	this.thrust = function() {
		
		this.temp.reset(this.thrustPower,0); 

		this.temp.rotate(this.angle); 
		this.vel.plusEq(this.temp); 
		
		if(this.thrustSize < 28){
			this.thrustSize += 2;
		}
	
	};
	
	this.rotateLeft = function() {
		this.angle -= this.rotateSpeed; 
	};
	this.rotateRight = function() {
		this.angle += this.rotateSpeed; 
	};
	
	
	// c = canvas context
	this.draw = function(c, thrusting) {		
				
		c.save();
		c.translate(this.pos.x, this.pos.y); 
		c.rotate(this.angle * Vector2Const.TO_RADIANS);

		c.strokeStyle = "#fff"; 
		c.lineWidth = 2; 
		
		c.beginPath();
		c.moveTo(-10, -10);
		c.lineTo(-10, 10);
		c.lineTo(14, 0);
			
		c.closePath();
		
		c.stroke();
		
		if(thrusting){
	
			console.log(this.thrustSize);
			if(this.drawCount % 3){
				// Draw thruster 1
				c.lineTo(-10, -8);
				c.lineTo(this.thrustSize * -1 -10, 0);
				c.lineTo(-10, 8);
			
			}else if(this.drawCount % 5){
				// Draw thruster 2
				c.lineTo(-10, -8);
				c.lineTo(this.thrustSize * -0.5 -10, 0);
				c.lineTo(-10, 8);
			}else if(this.drawCount % 2){
				// Draw thruster 2
				c.lineTo(-10, -8);
				c.lineTo(this.thrustSize * -0.25 -10, 0);
				c.lineTo(-10, 8);		
			}
		}
		
		c.stroke();
		
		c.restore();
		
		this.drawCount++;		

	};


}; 