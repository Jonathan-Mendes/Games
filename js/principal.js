var placarP = 0
var placarC = 0

start()

function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length)   
    var param_value = false  
    var params = loc.split("&")   
    for (i=0; i<params.length;i++) {
        param_name = params[i].substring(0,params[i].indexOf('=')) 
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)
        }   
    }   
    if (param_value) {  
        return param_value
    }   
    else {
        return undefined
    }   
}

function tiraEspaco(x) {
  return x.replace(/%20/g,' ');
}

function start(){
    clear()
    var variavel = queryString("variavel");
    variavel = tiraEspaco(variavel)
    
    if(variavel){
        insertName(variavel)
    }
    validateButtons()
}

function insertName(name){
    var nameJogador = document.getElementById('nameJogador')
    nameJogador.innerHTML = name
}

function validateButtons(){
    var btnPedra = document.getElementById('btnPedra')
    var btnPapel = document.getElementById('btnPapel')
    var btnTesoura = document.getElementById('btnTesoura')
    var btnJogar = document.getElementById('btnJogar')
    var btnReniciar = document.getElementById('btnReniciar')
    var btnVoltar = document.getElementById('btnVoltar')
    var imgPlayer = document.getElementById('player')
    var imgComp = document.getElementById('comp')
    var end = "../img/"
    var value = -1

    btnVoltar.onclick = function(){
        window.location = "index.html"
    }

    btnReniciar.onclick = function(){
        history.go(0)
    }

    btnPedra.onclick = function(){
        imgPlayer.src = end + "pedra.png"
        value = 0
    }

    btnPapel.onclick = function(){
        imgPlayer.src = end + "papel.png"
        value = 1
    }

    btnTesoura.onclick = function(){
        imgPlayer.src = end + "tesoura.png"
        value = 2
    }

    btnJogar.onclick = function(){
        var rand = Math.floor(Math.random() * (3 - 0))

        if(rand === 0){
            imgComp.src = end + "pedra.png"
        }else if(rand === 1){
            imgComp.src = end + "papel.png"
        }else{
            imgComp.src = end + "tesoura.png"
        }

        result(value, rand)
        setTimeout(start, 3000)
    }
    
}

function result(value, rand){
    if(value === rand){
        empateGame()
    }else if((value === 0) && (rand === 2)){
        playerWin()
    }else if((value === 1) && (rand === 0)){
        playerWin()
    }else if((value === 2) && (rand === 1)){
        playerWin()
    }else if((rand === 0) && (value === 2)){
        compWin()
    }else if((rand === 1) && (value === 0)){
        compWin()
    }else if((rand === 2) && (value === 1)){
        compWin()
    }
}

function playerWin(){
    placar(1)
    var result = returnResult()
    var variavel = queryString("variavel");
    result.innerHTML = variavel + " ganhou"
}

function compWin(){
    placar(2)
    var result = returnResult()
    result.innerHTML = "Computador ganhou"
}

function empateGame(){
    var result = returnResult()
    result.innerHTML = "Empate"
}

function returnResult(){
    return document.getElementById('result')
}

function clear(){
    var imgPlayer = document.getElementById('player')
    var imgComp = document.getElementById('comp')
    var result = returnResult()

    result.innerHTML = ""
    imgPlayer.src = "../img/neutro.png"
    imgComp.src = "../img/neutro.png"
}

function placar(index){
    var placarComp = document.getElementById('placarComp')
    var placarPlayer = document.getElementById('placarPlayer')

    if(index === 1){
        placarP = placarP + 1
        placarPlayer.innerHTML =  placarP
    }else{
        placarC = placarC + 1
        placarComp.innerHTML = placarC
    }
}