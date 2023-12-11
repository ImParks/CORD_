// 플레이어 영역
function Player(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack
    this.exp = 0;
    this.mexExp = "300";

    this.window = function(){

        logz("\n" + "[이름 : " + this.name + "] \n [HP:" + this.hp +"/" + this.maxHp +  "]\n [공격력 : 0 ~"+ this.attack + "] \n [경험치 : "+this.exp +"/" + this.mexExp + " ] \n \n");
    }


    this.info = function(){
        logz("\n" + "[이름 : " + this.name + "] \n [HP:" + this.hp +"/" + this.maxHp +  "] \n [최대 공격력 : " + this.attack + "] \n \n");
    }
}


//몬스터 영역
function Monster(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack

    this.info = function(){
      
        logz("\n" + "[개체 이름 : " + this.name + "] \n [HP:" + this.hp +"/" + this.maxHp + "] \n\n");
       
    }

}   