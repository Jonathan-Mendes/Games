start()

function start(){
    // clear()
    validateButtons()
    // setTimeout(start, 4000)
}

function validateButtons(){
    var span = document.getElementById('span')
    var btnIniciar = document.getElementById('btnIniciar')
    var namePlayer = document.getElementById('namePlayer')
    btnIniciar.onclick = function(){
        if(namePlayer.value.trim() != ''){
            var name = namePlayer.value
            window.location = "game.html?variavel="+name
        }else{
            span.className = span.className.replace('none', '').trim()
        }
    }
}