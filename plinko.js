class Plinko{
    constructor(x,y,w,h){
        var options={
            istatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
       this.h=h;
       World.add(world,this.body); 
     }
     display(){
 var pos=this.body.position;
 for (var j=40;j<=innerWidth;j=j+50){
     plinkos.push(new Plinko(j,75));
 }
 for (var j=15;j<=width-10;j=j+50){
     plinkos.push(new Plinko(j,175) );
 }
 rectMode(CENTER);
 fill("white");
 rect(pos.x,pos.y,this.w,this.h);
     }
 };