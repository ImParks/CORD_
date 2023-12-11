function Monster(){
    this.name = "";
    this.hp;
    this.attack;

    this.info = function(){
        hr();
        dw(this.name + "<br> HP:" + this.hp + "<br> 공격력 :" + this.attack );
        hr();
    }
}   

function Player(){
    this.name = "";
    this.hp;
    this.attack;

    this.info = function(){
        hr();
        dw([this.name] + "<br> HP:" + this.hp + "<br> 공격력 :" + this.attack );
        dw("["+this.name+"][ HP:"+this.hp+"] [ 공격력:"+this.attack+"]");
        hr();
    }
}

var slime = new Monster();

slime.name = '슬라임';
slime.hp = 10;
slime.attack = 1;

var champion_01 = new Player();

champion_01.name = 'ImPark';
champion_01.hp = 10;
champion_01.attack = 2;

slime.info();

champion_01.info();

