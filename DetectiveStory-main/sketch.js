var preStory,story;
var database,gameState;
var form, player, playerCount;
var gameState = 0;

function preload ()
{
  preStory = loadAnimation("story/murder1.jpg","story/murder2.jpg","story/murder3.jpg","story/murder4.jpg");
  preStory.frameDelay = 10;
}

function setup() 
{
  createCanvas(800,400);
  story = createSprite(400,200)
  story.addAnimation("ps",preStory);
  story.scale=0.3
  database = firebase.database();
  game = new Game();
  form = new Form();
  form.display()
    
}

function draw() 
{
  background('white');
  if (playerCount === 1) {
    game.update(1);
  }

  if(gameState === 1)
  {
    game.start();
    game.getState();
    game.play();
  }

  drawSprites();
}
