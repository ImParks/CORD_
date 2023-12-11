/*


클래스 생성, 각 객체간의 상태창 업데이트


*/



//----------------------------------------------------------------------클래스 생성----------------------------------------------------
function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function () {
        document.write("<hr>");
        document.write("[몬스터 :" + this.name + "][체력 :" + this.hp + "][공격력 :" + this.attack + "]<br>");
        document.write("<hr>");
    }
}
function Npc(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;

        this.info = function () {
            document.write("<hr>");
            document.write("[이름 :" + this.name + "][체력 :" + this.hp + "][공격력 :" + this.attack + "]<br>");
            document.write("<hr>");
        }
    }

var orc = new Monster("오크",100,10);
var elf = new Npc("엘프",100,10);

//----------------------------------------------------------------------화면 출력----------------------------------------------------


elf.info()
orc.info()