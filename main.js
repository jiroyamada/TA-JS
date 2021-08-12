document.getElementById("greeting-button").onclick = function(){

    var yourname = document.getElementById("name").value;

    document.getElementById("box").innerHTML = "こんにちは、" + yourname + "さん";
};