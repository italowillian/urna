var somaL = 0
var somaB = 0
var somaC = 0 
var somaBranco = 0

var res1 = document.getElementById('res1')
var res2 = document.getElementById('res')
var res3 = document.getElementById('res2')
var res4 = document.getElementById('res3')


function inserir(valor) {
    var valor1 = document.getElementById('campo1').value;
    var valor2 = document.getElementById('campo2').value;

    if(valor1 == '') {
        document.getElementById('campo1').value = valor;
    } else if(valor2 == '') {
        document.getElementById('campo2').value = valor;
    }
}

function corrige() {
    document.getElementById('campo1').value = '';
    document.getElementById('campo2').value = '';
}

function branco() {
    res4.innerHTML = `Seu voto foi nulo`
    somaBranco += 1
    res1.innerHTML = `O candidato Bolsonaro teve ${somaB} votos <br>
        O candidato Lula teve ${somaL} votos <br>
        O candidato Ciro Gomes teve ${somaC} votos <br> Votos em branco ${somaBranco}`
}

function votar() {
    var valor1 = parseInt(document.getElementById('campo1').value);
    var valor2 = parseInt(document.getElementById('campo2').value);
    var candidato = (valor1 * 10) + valor2;

        if(candidato === 17) {
            somaB += 1
            res3.innerHTML = `Você votou no Bolsonaro ta ok `        
        } else if(candidato === 13) {
            somaL += 1
            res3.innerHTML = `Você votou no Lula companheiros e companheiras desse Brasil`
            
        } else if(candidato === 12) {
            somaC += 1
            res3.innerHTML = `Você votou no Ciro Gomes`
        } else if(candidato <= 0) {
            res3.innerHTML = `Erro. Tente novamente por favor`  
        }
        res1.innerHTML = `O candidato Bolsonaro teve ${somaB} votos <br>
        O candidato Lula teve ${somaL} votos <br>
        O candidato Ciro Gomes teve ${somaC} votos <br> Votos em branco ${somaBranco}`
    document.getElementById('campo1').value = ''
    document.getElementById('campo2').value = ''
}

function resultado() {
    var img = document.getElementById('imagem')

     if(somaB > somaL && somaB > somaC && somaB > somaBranco) {
        res2.innerHTML = `O Bolsonaro ganhou com ${somaB} votos`
        img.src = 'bolsonaro.jpg'
     } else if(somaL > somaB && somaL > somaC && somaL > somaBranco) {
        res2.innerHTML = `O Lula ganhou com ${somaL} votos`
        img.src = 'lula.jpeg'
     } else if(somaC > somaB && somaC > somaL && somaC > somaBranco) {
        res2.innerHTML = `O Ciro Gomes ganhou com ${somaC} votos`
        img.src = 'ciro.avif'
     } else if(somaBranco > somaB && somaBranco > somaC && somaBranco > somaL) {
        res2.innerHTML = `O maior número de votos foi em branco com o total de ${somaBranco} votos`
     }
     
     else {
        res2.innerHTML = `Empate`
        img.src = 'candidato.jpg'
     }


}

const button1 = document.querySelector('.verde');
const button2 = document.querySelector('.brancobtn');
const popup1 = document.querySelector('.popup-wrapper');
const popup2 = document.querySelector('.popup-wrapper-01');
const closeButton1 = document.querySelector('.popup-close');
const closeButton2 = document.querySelector('.popup-close-01');

button1.addEventListener('click', () => {
    popup1.style.display = 'block'
})

closeButton1.addEventListener('click', () => {
    popup1.style.display = 'none'
})

button2.addEventListener('click', () => {
    popup2.style.display = 'block'
})

closeButton2.addEventListener('click', () => {
    popup2.style.display = 'none'
})