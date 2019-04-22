start()

function start(){
    // clear()
    validateButtons()
    // setTimeout(start, 4000)
}

function validateButtons(){
    var span = document.getElementById('span')
    var btnIniciar = document.getElementById('btnIniciar')
    var nameJogador = document.getElementById('nameJogador')
    var namePlayer = document.getElementById('namePlayer')
    btnIniciar.onclick = function(){
        if(namePlayer.value.trim() != ''){
            var name = namePlayer.value
            // nameJogador.innerHTML = name
            //span.className = none.className.replace('span', '').trim()
            window.location = "game.html?minhaVariavel="+name;
        }else{
            span.className = span.className.replace('none', '').trim()
        }
    }
}