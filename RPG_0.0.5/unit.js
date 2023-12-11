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
