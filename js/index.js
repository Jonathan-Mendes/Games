var placarP = 0
var placarC = 0

start()

function start(){
    clear()
    validateButtons()
    // setTimeout(start, 4000)
}

function validateButtons(){
    var btnPedra = document.getElementById('btnPedra')
    var btnPapel = document.getElementById('btnPapel')
    var btnTesoura = document.getElementById('btnTesoura')
    var btnJogar = document.getElementById('btnJogar')
    var imgPlayer = document.getElementById('player')
    var imgComp = document.getElementById('comp')
    var end = "../img/"
    var value = -1

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
    result.innerHTML = "Jogador 1 ganhou"
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