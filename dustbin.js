class Bin {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangles(x,y,width,height,option);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    }
}