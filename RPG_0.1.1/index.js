/*

턴 표시



*/

//---------------------------------------------------------------------전역변수 설정 ------------------------------------------------

var battleLog;
var text = "";
var monster
var mon = "";
var player
var pla = "";
var turm = 0;
var turz = 0;
var str = 0;
//---------------------------------------------battle();------------------------HTML 정보 불러오기 --------------------------------------------


window.onload = function () {

    battleLog = document.getElementById('battle_log');
    player = document.getElementById('player');
    monster = document.getElementById('monster');
    turz = document.getElementById('tur');

}




//---------------------------------------------------------------------단축 명령어 생성 -----------------------------------------------

function allWindow() {
    elf.window();
    orc.window();
}


function allInfo() {
    elf.info();
    orc.info();
}


function battleText(a) {
    text = text + a;
    battleLog.value = text;
}

function playerStatus(a) {
    pla = pla + "==============================================\n"
    pla = pla + a
    player.value = pla
}

function monsterStatus(a) {
    mon = mon + "==============================================\n"
    mon = mon + a
    monster.value = mon
}


function hr() {
    text = text + "==============================================\n";
    battleLog.value = text;
}


//----------------------------------------------------------------------클래스 생성----------------------------------------------------



var orc = new Monster("오크", 100, 20, 100, 10);
var elf = new Npc("엘프", 100, 30, 0, 300, 0);



//---------------------------------------------------------------------- 랜덤 효과----------------------------------------------------
// 공격력 랜덤
function ranAtk(atk) {
    var ran = atk + 1
    var atkRan = Math.floor(Math.random() * ran)
    return atkRan
}

//---------------------------------------------------------------------- 전투 상호작용 ----------------------------------------------------
function elfBattle() {
    var elfDmg = ranAtk(elf.attack);
    orc.hp = orc.hp - elfDmg;
    battleText(elf.name + "가 " + orc.name + "를 공격," + orc.name + "는 [" + elfDmg + "]의 대미지를 받았습니다.\n");
    battleText(orc.name + "의 현제 체력은 " + orc.hp + "입니다. \n");
    hr()
}
function orcBattle() {
    var orcDmg = ranAtk(orc.attack);
    elf.hp = elf.hp - orcDmg;
    battleText(orc.name + "가" + elf.name + "를 공격," + elf.name + "는[" + orcDmg + "]의 대미지를 받았습니다.\n");
    battleText(elf.name + "의 현제 체력은 " + elf.hp + "입니다.\n");
    hr()
}



//---------------------------------------------------------------------- 화면 출력----------------------------------------------------


function battle() {



    if (elf.hp <= 0 || orc.hp <= 0) {
        battleText("전투가 끝났습니다.\n");
        hr()
    } else {
    
        if (turm == 0) {
            allWindow()
            hr()
            battleText("전투 시작\n");
        } else {
            hr()
            elfBattle()
            orcBattle()
            allInfo()
            if (elf.hp <= 0 || orc.hp <= 0) {
                if (elf.hp <= 0) {
                    elf.exp = 0;
                    hr()
                    battleText(elf.name + "의 HP가" + elf.hp + "이되어 전투에서 패배하였습니다.\n");
                    battleText("모든 경험치를 잃었습니다.\n");
                    hr()
                    elf.window()
                } else if (orc.hp <= 0) {
                    elf.exp = elf.exp + orc.giveExp
                    elf.gold = elf.gold + orc.giveGold
                    hr()
                    battleText(orc.name + "의 HP가" + orc.hp + "이되어 전투에서 승리하였습니다. \n")
                    battleText("보상 : 경험치 + " + orc.giveExp + "\n");
                    hr()
                    elf.window()
                }
            }
        }


    }
    turm = turm + 1;
    turz.value = turm;



    
    
}
