var jogador = 1
var g1 = 0
var g2 = 0
var g3 = 0
var g4 = 0
var g5 = 0
var g6 = 0
var g7 = 0
var g8 = 0
var j1 = 0
var j2 = 0
var j3 = 0
var j4 = 0
var j5 = 0
var j6 = 0
var j7 = 0
var j8 = 0
p1 = 0
p2 = 0
fim = true

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

function insertNames(j1, j2){
	var name1 = document.getElementById('name1')
	var name2 = document.getElementById('name2')

	name1.innerHTML = j1
	name2.innerHTML = j2
}

function start(){
	var variavel = queryString("variavel");
	variavel = tiraEspaco(variavel)
	var jogadores = variavel.split('~')
	var name1 = jogadores[0]
	var name2 = jogadores[1]
	insertNames(name1, name2)
	play(jogador)
}

function play(player){
	var imgA1 = document.getElementById('a1')
	var imgA2 = document.getElementById('a2')
	var imgA3 = document.getElementById('a3')
	var imgB1 = document.getElementById('b1')
	var imgB2 = document.getElementById('b2')
	var imgB3 = document.getElementById('b3')
	var imgC1 = document.getElementById('c1')
	var imgC2 = document.getElementById('c2')
	var imgC3 = document.getElementById('c3')
	var btnVoltar = document.getElementById('btnVoltar')
	var btnReniciar = document.getElementById('btnReniciar')
	var btnContinuar = document.getElementById('btnContinuar')
	var btnMenu = document.getElementById('btnMenu')

	btnMenu.onclick = function(){
		window.location = "index.html"
	}

	btnVoltar.onclick = function(){
		window.location = "telaInicioJogoDaVelha.html"
	}

	btnContinuar.onclick = function(){
		continueGame()
	}

	btnReniciar.onclick = function(){
		history.go(0)
	}

	imgA1.onclick = function(){
		if(imgA1 && fim){
			trocaImg(imgA1)
			imgA1 = false
			validar('a1')
		}else{
			verificar(imgA1)
		}
	}
	imgA2.onclick = function(){
		if(imgA2 && fim){
			trocaImg(imgA2)
			imgA2 = false
			validar('a2')
		}else{
			verificar(imgA2)
		}
	}
	imgA3.onclick = function(){
		if(imgA3 && fim){
			trocaImg(imgA3)
			imgA3 = false
			validar('a3')
		}else{
			verificar(imgA3)
		}
	}
	imgB1.onclick = function(){
		if(imgB1 && fim){
			trocaImg(imgB1)
			imgB1 = false
			validar('b1')
		}else{
			verificar(imgB1)
		}
	}
	imgB2.onclick = function(){
		if(imgB2 && fim){
			trocaImg(imgB2)
			imgB2 = false
			validar('b2')
		}else{
			verificar(imgB2)
		}
	}
	imgB3.onclick = function(){
		if(imgB3 && fim){
			trocaImg(imgB3)
			imgB3 = false
			validar('b3')
		}else{
			verificar(imgB3)
		}
	}
	imgC1.onclick = function(){
		if(imgC1 && fim){
			trocaImg(imgC1)
			imgC1 = false
			validar('c1')
		}else{
			verificar(imgC1)
		}
	}
	imgC2.onclick = function(){
		if(imgC2 && fim){
			trocaImg(imgC2)
			imgC2 = false
			validar('c2')
		}else{
			verificar(imgC2)
		}
	}
	imgC3.onclick = function(){
		if(imgC3 && fim){
			trocaImg(imgC3)
			imgC3 = false
			validar('c3')
		}else{
			verificar(imgC3)
		}
	}
}

function trocaImg(img){
	img.src = endereco()
	trocaPlayer()
}

function trocaPlayer(){
	if(jogador === 1){
		jogador = 2
	}else if(jogador === 2){
		jogador = 1
	}
}

function endereco(end){
	if(jogador === 1){
		// console.log("jogador1")
		return "img/x.jpg"
	}else if(jogador === 2){
		// console.log("jogador2")
		return "img/o.jpg"
	}
}

function validar(v){
	
	if(v === 'a1'){
		
		if(jogador === 1){
			g1++
			g4++
			g7++
			if(g1 === 3 || g4 === 3 || g7 === 3){
				player2Win()
			}
		}else{
			j1++
			j4++
			j7++
			if(j1 === 3 || j4 === 3 || j7 === 3){
				player1Win()
			}
		}	
	}else if(v === 'a2'){
		
		if(jogador === 1){
			g1++
			g5++
			if(g1 === 3 || g5 ===  3){
				player2Win()
			}
		}else{
			j1++
			j5++
			if(j1 === 3 || j5 === 3){
				player1Win()
			}
		}
	}else if(v === 'a3'){
		if(jogador === 1){
			g1++
			g6++
			g8++
			if(g1 === 3 || g6 ===  3 || g8 === 3){
				player2Win()
			}
		}else{
				j1++
				j6++
				j8++
				if(j1 === 3 || j6 === 3 || j8 === 3){
					player1Win()
				}
			}
	}else if(v === 'b1'){
		if(jogador === 1){
			g2++
			g4++
			if(g2 === 3 || g4 ===  3){
				player2Win()
			}
		}else{
			j2++
			j4++
			if(j2 === 3 || j4 === 3){
				player1Win()
			}
		}
	}else if(v === 'b2'){
		if(jogador === 1){
			g2++
			g5++
			g7++
			g8++
			if(g2 === 3 || g5 ===  3 || g7 === 3 || g8 === 3){
				player2Win()
			}
		}else{
			j2++
			j5++
			j7++
			j8++
			if(j2 === 3 || j5 === 3 || j7 === 3 || j8 === 3){
				player1Win()
			}	
		}
	}else if(v === 'b3'){
		if(jogador === 1){
			g2++
			g6++
			if(g2 === 3 || g6 ===  3){
				player2Win()
			}
		}else{
			j2++
			j6++
			if(j2 === 3 || j6 === 3){
				player1Win()
			}
			}
	}else if(v === 'c1'){
		if(jogador === 1){
			g3++
			g4++
			g8++
			if(g3 === 3 || g4 ===  3 || g8 === 3){
				player2Win()
			}
		}else{
			j3++
			j4++
			j8++
			if(j3 === 3 || j4 === 3 || j8 === 3){
				player1Win()
				}
			}
	}else if(v === 'c2'){
		if(jogador === 1){
			g3++
			g5++
			if(g3 === 3 || g5 ===  3){
				player2Win()
			}
		}else{
			j3++
			j5++
			if(j3 === 3 || j5 === 3){
				player1Win()
			}
		}
	}
	else if(v === 'c3'){
		if(jogador === 1){
			g3++
			g6++
			g7++
			if(g3 === 3 || g6 ===  3 || g7 === 3){
				player2Win()
			}
		}else{
			j3++
			j6++
			j7++
			if(j3 === 3 || j6 === 3 || j7 === 3){
				player1Win()
			}
		}
	}
}

function player1Win(){
	// console.log("Player 1 ganhou")
	finish()
	imprimeResult("Player 1 Venceu")
	imprimePlacar(1)
}

function player2Win(){
	// console.log("player 2 ganhou")
	finish()
	imprimeResult("Player 2 Venceu")
	imprimePlacar(2)
}

function imprimeResult(x){
	var result = document.getElementById('result')
	result.innerHTML = x

}

function imprimePlacar(index){
	var placarPlayer1 = document.getElementById('resultP1')
	var placarPlayer2 = document.getElementById('resultP2') 
	
	if(index === 1){
		p1 = p1 + 1
        placarPlayer1.innerHTML =  p1
	}else{
		p2 = p2 + 1
        placarPlayer2.innerHTML =  p2
	}
}

function finish(){
	fim = false
}

function continueGame(){
	var a1 = document.getElementById('a1')
	var a2 = document.getElementById('a2')
	var a3 = document.getElementById('a3')
	var b1 = document.getElementById('b1')
	var b2 = document.getElementById('b2')
	var b3 = document.getElementById('b3')
	var c1 = document.getElementById('c1')
	var c2 = document.getElementById('c2')
	var c3 = document.getElementById('c3')
	var end = "../img/neutro.png"

	imprimeResult('')
	a1.src = end
	a2.src = end
	a3.src = end
	b1.src = end
	b2.src = end
	b3.src = end
	c1.src = end
	c2.src = end
	c3.src = end

	fim = true

	zerar()
	play()
}

function zerar(){
	var jogador = 1
	g1 = 0
	g2 = 0
	g3 = 0
	g4 = 0
	g5 = 0
	g6 = 0
	g7 = 0
	g8 = 0
	j1 = 0
	j2 = 0
	j3 = 0
	j4 = 0
	j5 = 0
	j6 = 0
	j7 = 0
	j8 = 0
}