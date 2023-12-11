var log="";
var str = "";
var plyAttack
var monAttack

window.onload = function(){
    log = document.getElementById('logs');
}

function logz(a){
    str = str + a
    log.value = str
    log.scrollTop = log.scrollHeight
}



// 몬스터 상태창
var slime = new Monster("슬라임",20,10);

// 플레이어 상태창
var champion = new Player("초보자",20,10);


// 플레이어가 몬스터를 공격
function atkMonster(){ 

    var dmg = ranAtk(champion.attack);
    slime.hp = slime.hp - dmg
    logz(champion.name + "가 " + slime.name + "을 공격하여 " + dmg + "의 피해를 입혔습니다. \n")
    logz(slime.name + "의 현재 체력은" + slime.hp + "입니다. \n\n" )

// 반격
    if(Math.floor(Math.random()*10)<3){
    var mrdmg = ranAtk(slime.attack);
    champion.hp = champion.hp - mrdmg;
    logz(slime.name + "이 반격하여 " + champion.name + " 에게 " + mrdmg + " 의 피해를 입었습니다.. \n")
    logz(champion.name + "의 현재 체력은" + champion.hp + "입니다. \n\n ")

    }
} 


// 몬스터가 플레이어를 공격
function atkPlater(){

    var monDmg = ranAtk(slime.attack);
    champion.hp = champion.hp - monDmg;
    logz(slime.name + "가 " + champion.name + "을 공격하여 " + monDmg + "의 피해를 입혔습니다. \n")
    logz(champion.name + "의 현재 체력은" + champion.hp + "입니다. \n\n" )
  
// 반격
    if(Math.floor(Math.random()*10)<3){
    var monMrDmg = ranAtk(champion.attack);
    slime.hp = slime.hp - monMrDmg
    logz(champion.name + "가 반격하여 " + slime.name + "에게 " + monMrDmg + "의 피해를 입혔습니다. \n")
    logz(slime.name + "의 현재 체력은" + slime.hp + "입니다. \n\n" )
  
    }

}
// 공격력 확률
    function ranAtk(attack){
        attack+1
        var random = Math.floor(Math.random()*attack);
        return random
}

// 게임 끝
function end(){
    if(champion.hp<=0){
        champion.exp = 0
        logz(slime.name + "의 HP가 0이되어 패배하였습니다. \n");
        logz("경험치를 모두 잃었습니다. \n " )
    } else {
        champion.exp = champion.exp + 100
        logz(slime.name + "의 HP가 0이되어 승리하였습니다. \n");
        logz("보상 : 경험치 + 100 \n" )
    }

}




// 전투처리 

dw("전투 시작")


 // 버튼을 누를시 전투 실행
function Battle(){
champion.hp = champion.maxHp
slime.hp = slime.maxHp

champion.window();
slime.info();


logz("\n\n")
while(true){

atkMonster()
atkPlater()
champion.info();
slime.info();
logz("\n\n")

if (champion.hp<=0 || slime.hp <=0){
    end()
    champion.window()
    logz("\n\n\n\n")
    break;
}
}

} 




