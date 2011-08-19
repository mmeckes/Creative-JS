function PickUp(x, y) {

	var pos = this.pos = new Vector2(x,y); 
	this.width = 25; 
	this.height = 27; 
	this.enabled = true ;
	
	this.render = function(c){

		
		
		
			c.save(); 
			
			c.fillStyle = "blue"; 
			
			c.fillRect(this.getLeft(), this.getTop(), this.width, this.height); 
			
			c.restore();
		
	};
	
	this.collect = function(){
	
		this.enabled = false ;
	
	
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