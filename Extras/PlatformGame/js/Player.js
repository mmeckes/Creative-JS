function Player(x, y) {

	var pos = this.pos = new Vector2(x,y); 
	var vel = this.vel = new Vector2(0,0); 
	var drag = this.drag = new Vector2(0.4, 0.95); 
	
	this.gravity = 3;
	
	this.width = 24; 
	this.height = 43; 
	
	
	this.connectedEdge = null; 
	
	this.update = function (){
	
		vel.x *= drag.x; 
		vel.y *= drag.y; 
		
		
		if(!this.connectedEdge){ 
			vel.y+=this.gravity; 
		}
			
		pos.plusEq(vel); 
		
	
	
	}; 
	
	this.render = function(c){
		
			
				
		c.save(); 
		c.fillStyle = "rgba(255,255,255,1)"; 
		c.fillRect(this.getLeft(), this.getTop(), this.width, this.height); 
		c.restore(); 
	
	
	};
	
	this.moveLeft = function() {
		this.vel.x-=12; 
		
	};
	
	this.moveRight = function() {
		
		this.vel.x+=12; 
		
	};
	
	this.jump = function() {
			
		if(this.connectedEdge) {
			vel.y -= 30; 
			this.connectedEdge = null; 
		}

	};
	
	this.fall = function(){
		this.connectedEdge = null;
	};
	

	
	this.getLeft = function() { 
		return pos.x; 
	};
	
	this.getRight = function() { 
		
		return pos.x+this.width; 
		
	};

	this.getTop = function() {
		return pos.y-this.height; 
		
	};
	
	this.getBottom = function () {
		
		return pos.y; 
		
	};







}