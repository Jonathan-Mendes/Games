start()

function start(){
    validateButtons()
}

function validateButtons(){
    var span = document.getElementById('span')
    var btnMenu = document.getElementById('btnMenu')
    var btnIniciar = document.getElementById('btnIniciar')
    var namePlayer1 = document.getElementById('namePlayer1')
    var namePlayer2 = document.getElementById('namePlayer2')
    
    btnIniciar.onclick = function(){
        if(namePlayer1.value.trim() != '' && namePlayer2.value.trim() != ''){
            var name = namePlayer1.value + '~' + namePlayer2.value
            window.location = "jogoDavelha.html?variavel="+name
        }else{
            span.className = span.className.replace('none', '').trim()
        }
    }

    btnMenu.onclick = function(){
        window.location = "index.html"
    }
}