class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        

        this.pointB = pointB
        this.sling1 = Constraint.create(options);
        World.add(world, this.sling1);
    }

    fly(){
        this.sling1.bodyA = null;
    }

    display(){
        if(this.sling1.bodyA){
            line(this.sling1.bodyA.position.x,this.sling1.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}