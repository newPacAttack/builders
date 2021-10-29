class Stone{
	constructor(x,y, width, height)
	{
	  var options={
		"restitution":0.8,
		"friction":0.9,
		"density":12,
	  }

		this.x=x;
		this.y=y;
		this.width = 60;
		this.height = 80;
        this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var Stonepos=this.body.position;		
			push()
			translate(Stonepos.x, Stonepos.y);
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