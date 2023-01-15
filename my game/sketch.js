function preload(){
narutoImage=loadImage("naruto running.gif")
backgroundImage=loadImage("naruto background.gif")
itachiImage=loadImage("naruto-itachi.gif")
obitoImage=loadImage("naruto obstacle obito.png")
sasoriImage=loadImage("naruto-sasori.png")
painImage=loadImage("naruto-painbrother-obstacle.jpeg")
kakuzuImage=loadImage("naruto-akatuski-obstacle.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  naruto=createSprite(windowWidth-900,windowHeight-200,50,50)
  naruto.scale=0.8
  naruto.addImage(narutoImage)

  itachi=createSprite(windowWidth-1200,windowHeight-200,50,50)
itachi.scale=0.6
itachi.addImage(itachiImage)
}

function draw(){
  background("pink")
  if(keyDown("space")){
    naruto.velocityY=-10
  }
 // image(backgroundImage,0,0,width,height)//
  createObstacles()
drawSprites()
}

function createObstacles(){
  if(frameCount%180===0){
    obstacle=createSprite(windowWidth,windowHeight-250,10,40)
    obstacle.velocityX=-8
    obstacle.scale=0.5
    num=Math.round(random(1,4))
    switch(num){
      case 1:
        obstacle.addImage(sasoriImage)
        break
        case 2: 
        obstacle.addImage(kakuzuImage)
        break
        case 3: 
        obstacle.addImage(obitoImage)
        break
        case 4: 
        obstacle.addImage(painImage)
        break
        default:break
        
    }}}