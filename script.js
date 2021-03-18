

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"   '+' height="'+ this.size + '" '+' src="' + this.image +'" '+' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 50;
    console.log('ok: ' + this.left);
  }
  this.moveBottom = function () {
    this.top += 20;
  }
  this.moveLeft = function(){
    this.left -=20;
  }

}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth){
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}
start()
var hero1 = new Hero('mieruko.png', 100,200,300)
function start1(){
  if(hero1.left < window.innerWidth){
    hero1.moveRight();
  }
  if(hero1.top < window.innerHeight ) {
    hero1.moveBottom();
  }
  document.getElementById('girl').innerHTML = hero1.getHeroElement();
  setTimeout(start1, 1000)
}
start1()
var hero2 = new Hero('eula.jpg',400,500,300)
function start2(){
  if (hero2.left < 1280) {
    hero2.moveLeft()
  }
  document.getElementById('eula').innerHTML = hero2.getHeroElement();
  setTimeout(start2,2000)
}
start2()
