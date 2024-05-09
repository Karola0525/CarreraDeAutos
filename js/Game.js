class Game {
  constructor() {}

  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
    });
  
    }

    update(state){
      database.ref("/").update({
        gameState:state
      });
    }
    start() {
      form = new Form();
      form.display();
      player = new Player();
  
      player.getCount();
      car1 = createSprite(width / 2 - 50, height - 100);
      car1.addImage("car1", car1_img);
      car1.scale = 0.07;
  
      car2 = createSprite(width / 2 + 100, height - 100);
      car2.addImage("car2", car2_img);
      car2.scale = 0.07;
  
      cars = [car1, car2];

      fuels=new Group();
      powerCoins=new Group ();

    this.addSprites(fuels,4,fuelImage,0.02)
    this.addSprites(powerCoins,18,powerCoinImage,0.09)



    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
      for (var i = 0; i < numberOfSprites; i++) {
        var x, y;
  
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
  
        var sprite = createSprite(x, y);
        sprite.addImage("sprite", spriteImage);
  
        sprite.scale = scale;
        spriteGroup.add(sprite);
      }
    }

    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
    }

  
  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers!==undefined){
      image(track,0,-height*5,width,height*6)

      var index = 0;
      for (var plr in allPlayers) {
       
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index].position.x = x;
        cars[index].position.y = y;
        index=index+1;
      }
      if(index==player.index){
        stroke(10)
        fill("pink")
        ellipse(x,y,60,60)
        this.handleFuel(index);
        this.handlePowerCoins(index);
      }




      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }
      drawSprites();
    }
   
  }
  handleFuel(index) {
    // Agregando combustible
    cars[index - 1].overlap(fuels, function(collector, collected) {
      player.fuel = 185;
      // "collected" es el sprite en el grupo de coleccionables que detona
      // el evento
      collected.remove();
    });
  }

   handlePowerCoins(index) {
    // Agregando monedas
    cars[index - 1].overlap(powerCoins, function(collector, collected) {
      player.score += 21;
      player.update();
      //"collected" es el sprite en el grupo de coleccionables que detona
      // el evento
      collected.remove();
    });
  }

}
