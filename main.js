document.getElementById("greeting-button").onclick = function(){

    var targetname = document.getElementById("name").value;
    var hour = new Date().getHours();
    var greeting;

    console.log("現在の時間："+ hour + "時");

    if(6 <= hour && hour < 12){
        greeting = "おはよう";
    }
    else if(12 <= hour && hour < 18){
        greeting = "こんにちは";
    }
    else{
        greeting = "こんばんは";
    }

    document.getElementById("box").innerHTML = greeting + "、" + targetname + "さん";
};