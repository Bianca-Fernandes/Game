class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.title = createElement("h2");
        this.greeting = createElement("h2");
        this.reset = createButton('Reset');       
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Boxing Game");
        this.title.position(displayWidth/2, 100);
        // this.title.textSize(10);
        // this.title.fontcolor("white")

        this.input.position(displayWidth/2, 250);
        this.button.position(displayWidth/2+100, 300);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1; 
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);       
            
          this.greeting.html("Welcome "+ player.name+ " to the Boxing World");
          this.greeting.position(displayWidth/2- 100, 250);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}