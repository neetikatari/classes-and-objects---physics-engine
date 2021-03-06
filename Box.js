class Box{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        var option = {
            restitution : 1,
            friction : 0.6,
            density : 0.04 
        }

        this.body = Bodies.rectangle (this.x, this.y,this.width,this.height,option)
        World.add(myworld, this.body)
    }

    display(){
    //to change the settings
        push()
    //translate is used to movefrom one position to another
        translate(this.body.position.x,this.body.position.y)
    //rotate 
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
      //pop is to help get the the previous settings
        pop ()
    }

}