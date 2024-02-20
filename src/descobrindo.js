/*
Criar um sistema que recebe usuario e senha, cria um ID para cada usuário, pode procurar cada usuário tanto pelo ID quanto pelo Usuário
e pode printar 'Ola sou tal pessoa' com o usuário 
preciso:
> array com os usuários, IDs e senhas de cada um
> função que adiciona um usuário e verifica se já existe usuário com esse nome
> função que pesquisa um usuário 
> variavel que guarda o usuário que precisa ser pesquisado
> função que exclui uma conta que já existe
*/

const usuarios = []

function criarUsu() {
 let nomeUsu = document.getElementById('nomeUsu').value.toLowerCase(),
    senhaUsu = document.getElementById('senhaUsu').value,
    existe 
 
    
    if (senhaUsu != '' && nomeUsu != '') {
        usuarios.forEach(e=>{
            if (usuarios[i] == nomeUsu && usuarios[i+1] == senhaUsu) {
                return existe = true
            } else {
                existe = false
            }
            i++
        })
        usuarios.push(nomeUsu, senhaUsu)
        console.log(`Usuário de nome: ${nomeUsu} criado`)
    } else {
        console.log('Preencha usuário e senha')
    }
}

function ola() {
    let nomeUsu = document.getElementById('nomeUsu').value.toLowerCase(),
    senhaUsu = document.getElementById('senhaUsu').value, i = 0

        usuarios.forEach(e => {
            if(usuarios[i] == nomeUsu && usuarios[i+1] == senhaUsu){
                console.log(`Olá, ${usuarios[i]}!`)
            }else{
                console.log(`Sem olá, ${usuarios[i]}!`)
            }
            i++
        })
}

function acharID(array) {
    let i = 0
    array.forEach(e => {
        if (array[i] == nomeUsu.toLowerCase()) {
            return id = i
        }
        i++
    })
}

function jaExiste(nome) {
    let i = 0
    usuarios.forEach(e => {
        if(usuarios[i] == nome){
            existe = true
        }
        i++
    })
    if (existe == true) {
        console.log('Existe')
        return existe = true
    } else {
        console.log('Não existe')
        return existe = false
    }
}

function excluirUsu() {
    let nomeUsu = document.getElementById('nomeUsu').value.toLowerCase(),
    senhaUsu = document.getElementById('senhaUsu').value, i = 0
    
   jaExiste(nomeUsu)

    if (existe == true) {
        usuarios.forEach(e => {
            if (usuarios[i] == nomeUsu && usuarios[i+1] == senhaUsu) {
                console.log('Excluido')
                usuarios.splice(i, 2)
            }
            i++
        })
    } else {
        console.log('Usuário não existe')
    }
}

/*
function array(){
    console.log(usuarios)
    i = 0
    usuarios.forEach(e=>{
        console.log(usuarios[i])
        i++
    })
}
*/