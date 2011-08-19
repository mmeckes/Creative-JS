function Edge(x, y, w)
{
	var pos = this.pos = new Vector2(x, y);
	

	this.width = w; 
	this.getLeft = function(){
		return this.pos.x; 
	
	};

	this.getRight = function(){
		return this.pos.x+this.width; 
		
	};



	this.getTop = function(){
		return this.pos.y; 
		
	};



	this.render = function(c){
		
		
		c.save(); 
		c.fillStyle = "white";
		c.translate(pos.x, pos.y); 
		c.fillRect(0,0,this.width, 10);
		
		c.restore(); 
		
		
	};










}