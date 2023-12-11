
//---------------------------------------------------------------------단축 명령어 생성 -----------------------------------------------









function battleText(a){
    text = text + a;
    battleLog.value = text;
}

function playerStatus(a){
    pla = pla + "==============================================\n"
    pla = pla + a
    player.value = pla
}

function monsterStatus(a){
    mon = mon + "==============================================\n"
    mon = mon + a
    monster.value = mon
}


function hr(){
    text = text + "==============================================\n";
    battleLog.value = text;
}

function battleLogReSet(){
    battleLog.value = "";
}

function monsterReSet(){
    monster.value = "";
}

function playerReSet(){
    player.value = "";
}


function reSet(){
    playerReSet();
    monsterReSet();
    battleLogReSet();
}