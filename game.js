class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

        player1 = createSprite(100, 200);
        player1.addImage("p1", p1);
    }  

    play(){
        form.hide();

        Player.getPlayerInfo();
        player.getRank();


        if(allPlayers !== undefined){
            background(bg2);
            player1.x = 618;
            player1.y = 314;
        }
        if(keyDown(LEFT_ARROW)&& player.index !== null){
            
        }

        if(keyDown(RIGHT_ARROW)&& player.index !== null){
            
        }
    }

    end(){
        console.log("Game Over");
    }
}