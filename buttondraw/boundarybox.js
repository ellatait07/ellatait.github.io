console.log("colour box js called");

class boundaryBox{
    constructor(x, y, w, h, c1, target2){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c1 = c1;
        this.target2;

    }
    update(){
        this.draw();

    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
        
    }

    drawRect(x, y, w, h){
        ctx.fillStyle = this.c1;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
        
    }


}