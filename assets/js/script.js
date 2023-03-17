function backImage(lutador, img){
    document.querySelector(`#${lutador} .img`).style.backgroundImage = `url(assets/img/${img}.png)`
    document.querySelector(`#${lutador} .img`).style.backgroundPosition = 'center'
    document.querySelector(`#${lutador} .img`).style.backgroundSize = 'cover'
}

let hero = ''
let monstro = ''

let guerreiro = document.querySelector('.guerreiro').addEventListener('click',() => {
    backImage('char','guerreiro')
    hero = 'guerreiro'
    
})
let mago = document.querySelector('.mago').addEventListener('click',() => {
    backImage('char','mago')
    hero = 'mago'
})
let pequenoMonstro = document.querySelector('.pequeno-monstro').addEventListener('click',() => {
    backImage('monstro','pequeno-monstro')
    monstro = 'pequeno'
})
let grandemMonstro = document.querySelector('.grande-monstro').addEventListener('click',() => {
    backImage('monstro','grande-monstro')
    monstro = 'grande'
})


document.querySelector('.play').addEventListener('click',() => {
    if(hero == 'guerreiro' & monstro == 'grande'){
        cenario.start(
            createGuerreiro('Guerreiro'),
            createGrandeMonstro(),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else if(hero == 'mago' & monstro == 'grande'){
        cenario.start(
            createMago('Mago'),
            createGrandeMonstro(),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else if(hero == 'guerreiro' & monstro == 'pequeno'){
        cenario.start(
            createGuerreiro('Guerreiro'),
            createPequenoMonstro(),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else if(hero == 'mago' & monstro == 'pequeno'){
        cenario.start(
            createMago('Mago'),
            createPequenoMonstro(),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else{
        window.alert('Escolha os personagens!')
        return
    }

    escondidos = ['.play','.guerreiro','.mago','.grande-monstro','.pequeno-monstro']
    for(let i in escondidos){
        document.querySelector(`${escondidos[i]}`).style.display = 'none'
    }

    mostrar = ['.reset','#monstro .botão_atacar','#char .botão_atacar','#char .barra-vida','#char .barra','#monstro .barra-vida','#monstro .barra']
    for(let i in mostrar){
        document.querySelector(`${mostrar[i]}`).style.display = 'flex'
    }

    
})

document.querySelector('dialog a').addEventListener('click', () => {document.querySelector('dialog').close()})



