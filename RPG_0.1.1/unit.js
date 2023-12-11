function Monster(name,hp,attack,giveExp,giveGold) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack;
    this.giveExp = giveExp;
    this.giveGold = giveGold

    this.info = function(){
        hr()
        battleText("[몬스터 :" + this.name + "][체력 :" + this.hp + "/" + this.maxHp + "]\n");
    }
    this.window = function(){
        hr()
        battleText("[몬스터 :" + this.name + "][체력 :" + this.hp + "][공격력 : 0 ~ " + this.attack + "]\n");
    }
}
function Npc(name,hp,attack,exp,maxExp,gold) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.attack = attack;
        this.exp = exp;
        this.maxExp = maxExp;
        this.gold = gold;

        this.info = function(){
            playerStatus("[이름 :" + this.name + "][체력 :" + this.hp + "/" + this.maxHp + "]\n");
        }
        this.window = function(){
            playerStatus("[이름 :" + this.name + "][체력 :" + this.hp + "/" + this.maxHp + "][공격력 : 0 ~ " + this.attack + "][EXP : "+ this.exp +"/" + maxExp + "][보유 골드 : "+ this.gold + "g]\n");
        }
    }
