let hero = ''
let monstro = ''

let guerreiro = document.querySelector('.guerreiro').addEventListener('click',() => {
    document.querySelector('#char .img').style.backgroundImage = 'url(assets/img/guerreiro.png)'
    document.querySelector('#char .img').style.backgroundPosition = 'center'
    document.querySelector('#char .img').style.backgroundSize = 'cover'
    hero = 'guerreiro'
    
})
let mago = document.querySelector('.mago').addEventListener('click',() => {
    document.querySelector('#char .img').style.backgroundImage = 'url(assets/img/mago.png)'
    document.querySelector('#char .img').style.backgroundPosition = 'center'
    document.querySelector('#char .img').style.backgroundSize = 'cover'
    hero = 'mago'
})
let pequenoMonstro = document.querySelector('.pequeno-monstro').addEventListener('click',() => {
    document.querySelector('#monstro .img').style.backgroundImage = 'url(assets/img/pequeno-monstro.png)'
    document.querySelector('#monstro .img').style.backgroundPosition = 'center'
    document.querySelector('#monstro .img').style.backgroundSize = 'cover'
    monstro = 'pequeno'
})
let grandemMonstro = document.querySelector('.grande-monstro').addEventListener('click',() => {
    document.querySelector('#monstro .img').style.backgroundImage = 'url(assets/img/grande-monstro.png)'
    document.querySelector('#monstro .img').style.backgroundPosition = 'center'
    document.querySelector('#monstro .img').style.backgroundSize = 'cover'
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
    document.querySelector('.play').style.display = 'none'
    document.querySelector('.reset').style.display = 'flex'
})




