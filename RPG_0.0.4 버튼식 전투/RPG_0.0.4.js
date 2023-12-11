var log
var str = "";
window.onload = function(){
    log = document.getElementById('logs');
}

function logz(a){
    str = str + a
    log.value = str
}


//몬스터 영역
function Monster(){
    this.name = "";
    this.hp;
    this.attack;

    this.info = function(){
        hr()
        dw("[개체 이름 : " + this.name + "] \n [HP:" + this.hp + "] \n [공격력 : " + this.attack + "] \n");
        hr()
    }

}   
// 플레이어 영역
function Player(){
    this.name = "";
    this.hp;
    this.attack;

    this.info = function(){
        hr()
        dw("[이름 : " + this.name + "] \n [HP:" + this.hp + "] \n [공격력 : " + this.attack + " ] \n");
        hr()
    }
}


// 몬스터 상태창
var slime = new Monster();

slime.name = '슬라임';
slime.hp = 10;
slime.attack = 1;
// 플레이어 상태창
var champion_01 = new Player();

champion_01.name = '초보자';
champion_01.hp = 10;
champion_01.attack = 2;


// 몬스터를 공격
function atkMonster(){ 
    slime.hp = slime.hp - champion_01.attack;
    logz(champion_01.name + "가 " + slime.name + "을 공격하여 " + champion_01.attack + "의 피해를 입혔습니다. \n")

    logz(slime.name + "의 현재 체력은" + slime.hp + "입니다. \n" )

    win()
    if(Math.floor(Math.random()*10)<3){
    champion_01.hp = champion_01.hp - slime.attack;
    logz(slime.name + "이 반격하여 " + champion_01.name + "의 HP가 " + champion_01.hp + "남았습니다. \n \n")
    loes()
    }


} 

// 몬스터가 공격
function atkPlater(){
    champion_01.hp = champion_01.hp - slime.attack;
    logz(slime.name + "이 " +champion_01.name + "을 공격하여 " + slime.attack + "의 피해를 입혔습니다. \n" )

    loes()
    logz(champion_01.name + "의 현재 체력은" + champion_01.hp + "입니다. \n" )
    if(Math.floor(Math.random()*10)<3){
        slime.hp = slime.hp - champion_01.attack;
        logz(champion_01.name + "이 반격하여 " + slime.name + "의 HP가 " + slime.hp + "남았습니다. \n \n")
        win()
    }
}
 // 플레이어가 이겼을때
function win(){
    if(slime.hp<0){

        dw(slime.name + "의 HP가 0이되어 승리하였습니다. \n");
  
    }
}
 // 플레이어가 졌을떄
function loes(){
    if(champion_01.hp<0){

        dw(slime.name + "의 HP가 0이되어 패배하였습니다. \n");

    }
}



champion_01.info();
slime.info();
dw("전투 시작")


 // 버튼을 누를시 전투 실행
function Battle(){


atkMonster()
atkPlater()

logz("\n\n")


} 




