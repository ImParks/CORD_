/*

클래스 생성을 별도파일로 이동
상태창, 캐릭터창 한번에 불러오기 명령어 생성


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



var orc = new Monster("오크",100,10);
var elf = new Npc("엘프",100,10);



//---------------------------------------------------------------------- 랜덤 효과----------------------------------------------------

function ranAtk(atk){
    var ran = atk + 1
    var atkRan = Math.floor(Math.random()*ran)
    return atkRan
}

//---------------------------------------------------------------------- 화면 출력----------------------------------------------------

allWindow()


document.write("<hr>");
document.write("전투 시작");


var elfDmg = ranAtk(elf.attack);


orc.hp = orc.hp - elfDmg

document.write("<hr>");
document.write(elf.name + "가 " + orc.name +"를 공격" + "<br>" + orc.name + "는 [" + elfDmg + "]의 데미지를 받았습니다." );
document.write("<hr>");
document.write(orc.name + "의 현제 체력은 " + orc.hp + "입니다.");




allInfo()