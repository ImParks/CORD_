function Monster(){
    this.name = "";
    this.hp;
    this.attack;

    this.info = function(){
        hr();
        dw("[개체 이름 : " + this.name + "]<br> [HP:" + this.hp + "]<br> [공격력 : " + this.attack + "]");
        hr();
    }

}   

function Player(){
    this.name = "";
    this.hp;
    this.attack;

    this.info = function(){
        hr();
        dw("[이름 : " + this.name + "]<br> [HP:" + this.hp + "]<br> [공격력 : " + this.attack + " ]");
        hr();
    }
}



var slime = new Monster();

slime.name = '슬라임';
slime.hp = 10;
slime.attack = 1;

var champion_01 = new Player();

champion_01.name = '초보자';
champion_01.hp = 10;
champion_01.attack = 2;


champion_01.info();
slime.info();
hr()
dw("전투 시작")
hr()
// 몬스터를 공격
function atkMonster(){ 
    slime.hp = slime.hp - champion_01.attack;
    dw(champion_01.name + "가 " + slime.name + "을 공격하여 " + champion_01.attack + "의 피해를 입혔습니다." )
    br()
    dw(slime.name + "의 현재 체력은" + slime.hp + "입니다." )
    br()
    win()
    if(Math.floor(Math.random()*10)<3){
    champion_01.hp = champion_01.hp - slime.attack;
    dw(slime.name + "이 반격하여 " + champion_01.name + "의 HP가 " + champion_01.hp + "남았습니다.")
    loes()
    }


} 

// 몬스터가 공격
function atkPlater(){
    champion_01.hp = champion_01.hp - slime.attack;
    dw(slime.name + "이 " +champion_01.name + "을 공격하여 " + slime.attack + "의 피해를 입혔습니다." )
    br()
    loes()
    dw(champion_01.name + "의 현재 체력은" + champion_01.hp + "입니다." )
    if(Math.floor(Math.random()*10)<3){
        slime.hp = slime.hp - champion_01.attack;
        dw(champion_01.name + "이 반격하여 " + slime.name + "의 HP가 " + slime.hp + "남았습니다.")
        win()
    }

}

function win(){
    if(slime.hp<0){
        hr();
        dw(slime.name + "의 HP가 0이되어 승리하였습니다.");
        hr();    
    }
}

function loes(){
    if(champion_01.hp<0){
        hr();
        dw(slime.name + "의 HP가 0이되어 패배하였습니다.");
        hr();    
    }
}



function Battle(){

atkMonster()


} 




