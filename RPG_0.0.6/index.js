/*
전투 처리부분 및 상태정보 출력 함수 추가

전투 무한루프 처리, 전투 개체의 hp가 0이 될때까지 공격

전투종료 메세지 추가

*/

//---------------------------------------------------------------------단축 명령어 생성 -----------------------------------------------

function allWindow(){
    document.write("<hr>");
    elf.window()
    orc.window()
    document.write("<hr>");
}


function allInfo(){
    document.write("<hr>");
    elf.info()
    orc.info()
    document.write("<hr>");
}




//----------------------------------------------------------------------클래스 생성----------------------------------------------------



var orc = new Monster("오크",100,20);
var elf = new Npc("엘프",100,30);



//---------------------------------------------------------------------- 랜덤 효과----------------------------------------------------
// 공격력 랜덤
function ranAtk(atk){
    var ran = atk + 1
    var atkRan = Math.floor(Math.random()*ran)
    return atkRan
}

//---------------------------------------------------------------------- 전투 상호작용 ----------------------------------------------------
function elfBattle(){
    var elfDmg = ranAtk(elf.attack);
    orc.hp = orc.hp - elfDmg;
    document.write(elf.name + "가 " + orc.name +"를 공격," + "<br>" + orc.name + "는 [" + elfDmg + "]의 대미지를 받았습니다." );
    document.write("<hr>");
    document.write(orc.name + "의 현제 체력은 " + orc.hp + "입니다.");
}
function orcBattle(){
    var orcDmg = ranAtk(orc.attack);
    elf.hp = elf.hp - orcDmg;
    document.write(orc.name + "가" + elf.name + "를 공격,<br>" + elf.name + "는[" + orcDmg + "]의 대미지를 받았습니다." );
    document.write("<hr>");
    document.write(elf.name + "의 현제 체력은 " + elf.hp + "입니다.");
}

//---------------------------------------------------------------------- 화면 출력----------------------------------------------------

allWindow()


document.write("전투 시작");
document.write("<hr>");

while(true){
    elfBattle()
    orcBattle()
    allInfo()

    if(elf.hp <= 0 || orc.hp <= 0){
        if(elf.hp <= 0){
            document.write("<hr>");
            document.write(elf.name +"의 HP가" + elf.hp + "이되어 전투에서 패배하였습니다." );
            document.write("<hr>");
            break;
        } else if (orc.hp <= 0){
            document.write("<hr>");
            document.write(orc.name +"의 HP가" + orc.hp + "이되어 전투에서 패배하였습니다." )
            document.write("<hr>");
            break;
        }
    }
}
