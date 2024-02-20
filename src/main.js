const paraIP = e => {
if (e.length != 12 && e != '') {
        console.log('Tamanho errado.')
} else {
    x = String(e).replace(/^(\d{3})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3.$4")
    console.log(x)
}
}
const paraTell = e => {
    if (e.length != 13 && e != '') {
        console.log('Tamanho errado.')
    } else {
        x = String(e).replace(/^(\d{2})(\d{2})(\d{4})(\d{4})/, "+$1 ($2) $3-$4")
        console.log(x)
    }
}
const paraCEP = e => {
    if (e.length != 8 && e != '') {
        console.log('Tamanho errado.')
    } else {
        x = String(e).replace(/^(\d{5})(\d{3})/, "$1-$2")
        console.log(x)
    }
}
const paraCPF = e => {
    if (e.length != 11 && e != '') {
        console.log('Tamanho errado.')
    } else{
        x = String(e).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        console.log(x)
    }
}

function transIP() {
    num()
    paraIP(x)
}

function transTell() {
    num()
    paraTell(x)
}

function transCEP() {
    num()
    paraCEP(x)
}

function transCPF() {
    num()
    paraCPF(x)
}

function num() {
    x = document.getElementById('num').value
    if (x != '') {
        return x 
    } else {   
        return console.log('Digite um número!')
    }
}