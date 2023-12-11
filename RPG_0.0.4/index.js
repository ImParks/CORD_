/*


상태창 UI 에 최대체력 추가
캐릭터 UI 정보표시 수정

전투 종료후 현제상태 UI 간소화


*/





//----------------------------------------------------------------------클래스 생성----------------------------------------------------
function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack;
    this.info = function(){
        document.write("<hr>");
        document.write("[몬스터 :" + this.name + "][체력 :" + this.hp + "/" + this.maxHp + "]<br>");
        document.write("<hr>");
    }
    this.window = function(){
        document.write("<hr>");
        document.write("[몬스터 :" + this.name + "][체력 :" + this.hp + "][공격력 : 0 ~ " + this.attack + "]<br>");
        document.write("<hr>");
    }
}
function Npc(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.attack = attack;

        this.info = function () {
            document.write("<hr>");
            document.write("[이름 :" + this.name + "][체력 :" + this.hp + "/" + this.maxHp + "]<br>");
            document.write("<hr>");
        }
        this.window = function(){
            document.write("<hr>");
            document.write("[이름 :" + this.name + "][체력 :" + this.hp + "/" + this.maxHp + "][공격력 : 0 ~ " + this.attack + "]<br>");
            document.write("<hr>");
        }
    }

var orc = new Monster("오크",100,10);
var elf = new Npc("엘프",100,10);

//---------------------------------------------------------------------- 랜덤 효과----------------------------------------------------

function ranAtk(atk){
    var ran = atk + 1
    var atkRan = Math.floor(Math.random()*ran)
    return atkRan
}

//---------------------------------------------------------------------- 화면 출력----------------------------------------------------


elf.window()
orc.window()

document.write("<hr>");
document.write("전투 시작");


var elfDmg = ranAtk(elf.attack);


orc.hp = orc.hp - elfDmg

document.write("<hr>");
document.write(elf.name + "가 " + orc.name +"를 공격" + "<br>" + orc.name + "는 [" + elfDmg + "]의 데미지를 받았습니다." );
document.write("<hr>");
document.write(orc.name + "의 현제 체력은 " + orc.hp + "입니다.");



elf.info()
orc.info()