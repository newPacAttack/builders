class Iron{
	constructor(x,y, width, height)
	{
	  var options={
		"restitution":0.8,
		"friction":3,
		"density":30,
	  }

		this.x=x;
		this.y=y;
		this.width = 50;
		this.height = 40;
        this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}