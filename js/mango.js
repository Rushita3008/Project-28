class Mango
{
	constructor(x,y,r)
	{
		var options={
            isStatic:true,
            restitution: 0,
            friction: 1,
           		
			}
	
        this.x = x;
        this.y = y;
        this.r = r;
	
        this.body=Bodies.circle(this.x,this.y,this.r, options);
             World.add(world, this.body);
         this.image = loadImage("mango.png");

	}
	display()
	{
			
			var pos=this.body.position;		
             push ()
             translate(pos.x,pos.y);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2);
            pop ()
			
			
	}

}