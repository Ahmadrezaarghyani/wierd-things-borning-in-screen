/**  @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize" , ()=>{
    canvas.width = window.innerWidth
canvas.height = window.innerHeight
})

class Root{
    constructor(x , y){
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4-2;
        this.speedY = Math.random() * 4-2;
        this.maxSize = Math.random() * 5 + 3;
        this.size = Math.random() * 1+2;
        this.anglex = Math.random() * 6.2 ;
        this.angley = Math.random() * 6.2 ;
        this.vax = Math.random() * 0.9 - 0.3 ;
        this.vay = Math.random() * 0.9 - 0.3 ;
        this.lightness = 1
        this.changeColor = Math.random() * 1000 
        this.changes = ["saturation","color" ,"color-burn","copy", "difference"]

        
    }
    update(){
        this.x += this.speedX + Math.sin(this.anglex);
        this.y += this.speedY + Math.sin(this.angley);
        this.size += 0.1; 
        this.anglex += this.vax
        this.angley += this.vay
        this.lightness += Math.random() * 3
        this.changeColor += Math.random() * 3
        if(this.size < this.maxSize){
             ctx.beginPath()
            ctx.arc(this.x , this.y , this.size , 0 , Math.PI * 2)
            ctx.fillStyle = `hsl(${this.changeColor},100%,${this.lightness}%)`
            ctx.fill()
            ctx.stroke();
            requestAnimationFrame(this.update.bind(this))
        }
    }
}

canvas.addEventListener("mousemove" , function(e){
const root = new Root(e.x , e.y)
root.update()
})

