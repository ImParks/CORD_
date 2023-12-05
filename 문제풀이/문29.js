var play = prompt("가위 바위 보");



var ran = Math.floor(Math.random()*3)+1
switch(ran){
    case 1 :
        var b = ("가위");
        break;
    case 2 :
        var b = ("바위");
        break;
    case 3 :
        var b = ("보");
        break;    
}


if(play == b){ 

    var result = "비겼습니다."
    
} else if(play =="가위"){

    if(b == "보"){
        var result = "이겼습니다."
    } else if(b == "바위"){
        var result = "졌습니다."
    }
    
}else if(play =="바위"){

    if(b == "가위"){
        var result = "이겼습니다."
    } else if(b == "보"){
        var result = "졌습니다."
    }


    
} else if(play =="보"){

    if(b == "바위"){
        var result = "이겼습니다."
    } else if(b == "가위"){
        var result = "졌습니다."
    }
    
}

 document.write("player는 |" + play + "|를, bot은 |" + b + "|를 냈습니다. <br>")
 document.write("가위 바위 보 게임을 " + result )