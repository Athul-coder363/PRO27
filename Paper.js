class Paper{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0.1,
            density:   1.2,
            friction: 0.5
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r = r;
    
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        
        push();
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop();
    }
       
    
}
