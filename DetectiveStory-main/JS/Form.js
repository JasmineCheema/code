class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
      //this.title.text("Detective Story");
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }

    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>Ready to play then lets go...`;
        this.greeting.html(message);
        playerCount += 1;
        //player.name = this.input.value();
        //player.index = playerCount;
        //player.addPlayer();
        //player.updateCount(playerCount);
      });
    }
  
    display() {
      this.setElementsPosition();
      this.handleMousePressed();
    }
  }