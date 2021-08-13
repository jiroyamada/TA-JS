function greet(){
    var greeting;
    var hour = new Date().getHours();

    if(6 <= hour && hour < 12){
        greeting = "おはよう";
    }
    else if(12 <= hour && hour < 18){
        greeting = "こんにちは";
    }
    else{
        greeting = "こんばんは";
    }

    return greeting;

}

document.getElementById("greeting-button").onclick = function(){
    var greeting = greet();
    var targetname = document.getElementById("name").value;

    document.getElementById("box").innerHTML = greeting + "、" + targetname + "さん";
};

document.getElementById("cheerful-button").onclick = function(){
    var greeting = greet();
    var targetname = document.getElementById("name").value;

    document.getElementById("box").innerHTML = greeting + "！、" + targetname + "さん！！！";
};