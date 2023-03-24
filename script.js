function tab(tab){
document.getElementById("side").style.display = "none";
document.getElementById("games").style.display = "none";
document.getElementById("other").style.display = "none";
document.getElementById(tab).style.display = "inline-block";
}

tab('games');
