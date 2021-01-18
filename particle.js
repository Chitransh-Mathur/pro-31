class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.r=r;
        this.body=Bdies.circle(x,y,ths.r,options);
        this.color=color(random(o,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;
if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
    for (var j=0;j<particles.length;j++){
    particls[j].display();    
    }
    
push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.r,tis.r);
pop();
    }
};