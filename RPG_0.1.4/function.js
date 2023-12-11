
//---------------------------------------------------------------------단축 명령어 생성 -----------------------------------------------


function battleStrat() {
    allWindow();
    hr();
    battleText("전투 시작\n");
}




//---------------------------------------------------------------------텍스트 관리 -----------------------------------------------

// 배틀텍스트 작성

function battleText(a) { 
    text = text + a;
    battleLog.value = text;
}


// 배틀 텍스트 줄바꿈

function hr() { 
    text = text + "==============================================\n";
    battleLog.value = text;
}



// 배틀 텍스트 리셋

function battleLogReSet() { 
    battleLog.value = "";
}



//플레이어 텍스트 작성

function playerStatus(a) { 
    pla = pla + "==============================================\n"
    pla = pla + a
    player.value = pla
}



//플레이어 텍스트 리셋

function playerReSet() {
    player.value = "";
}



// 몬스터 텍스트 리셋

function monsterReSet() { 
    monster.value = "";
}



// 몬스터 텍스트 작성

function monsterStatus(a) {
    mon = mon + "==============================================\n"
    mon = mon + a
    monster.value = mon
}


// 전부 리셋

function reSet() {
    playerReSet();
    monsterReSet();
    battleLogReSet();
}

// 스크롤 내리기
function scroll() {
    player.scrollTop = player.scrollHeight;
    battleLog.scrollTop = battleLog.scrollHeight;
    monster.scrollTop = monster.scrollHeight;
}

//---------------------------------------------------------------------상태창 -----------------------------------------------


// 몬스터, npc 상태창 한번에

function allWindow() {
    elf.window();
    orc.window();
}

// 몬스터, npc 상태
function allInfo() {
    elf.info();
    orc.info();
}


 
//---------------------------------------------------------------------이동상호작용 -----------------------------------------------
 
function endBatte() {
    mode = "대기"
}


function straight() {
    battleText("앞으로 이동하였습니다..")
}

function back() {
    battleText("뒤로 이동했습니다.")
}

function right() {
    battleText("오른쪽으로 이동했습니다.")
}

function left() {
    battleText("왼쪽으로 이동했습니다.")
}


function turm() {
    turm = turm + 1;
    turz.value = turm;
}