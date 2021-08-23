const cardBoard = document.querySelector("#cardboard");
const imagesFamilia = [
    'eliane.png',
    'helena.png',
    'julia.png',
    'livia.png',
    'lucas.png',
    'marilia.png',
    'neli.png',
    'paulo.png',
    'sergio.png',
    'sergioVo.png'
];

const imagesPawPatrol= [
    'chase.png',
    'everest.png',
    'marchal.png',
    'rocky.png',
    'rumble.png',
    'ryder.png',
    'sky.png',
    'tracker.png',
    'zuma.png',
    'chica.png'
];


let cardHTML = '';

imagesFamilia.forEach(img => {
    cardHTML += `
    <div class="memory-card" data-card="${img}">
        <img class="front-face" src="img/familia/${img}"></img>
        <img class="back-face" src="img/fundo.png"></img>
    </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;



//Fim renderização

const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let lockCard = false;

function flipCard(){
    if(lockCard) return false;
    listaClasses = this.classList
    if(listaClasses.contains('flip')) return false;
    this.classList.add('flip');
    if(!firstCard){
        firstCard=this;
        return false;
    }
    secondCard=this;    
checkForMatch();
};


function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;
    !isMatch ? disableCards():resetCards(isMatch);
}

function disableCards(){
    lockCard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
    },1000)
    
}

(function shuffle(){
    cards.forEach(card=>{
        let rand = Math.floor(Math.random()*12);
        card.style.order = rand;
    })
})();

function resetCards(isMatch = false){
    if(isMatch){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
    [firstCard, secondCard, lockCard] = [null, null, false];
    
}

cards.forEach(card=>card.addEventListener('click', flipCard));



//Jogo PawPatrol


const buttonChange = document.querySelector("#trocar");



function loadImages(){
    buttonChange.textContent = 'Recarregue página para voltar para família'
    buttonChange.style.background = "black"
    const cardBoard = document.querySelector("#cardboard");
    cardBoard.innerHTML='';
    let cardHTML = '';

imagesPawPatrol.forEach(img => {
    cardHTML += `
    <div class="memory-card" data-card="${img}">
        <img class="front-face" src="img/pawPatrol/${img}"></img>
        <img class="back-face" src="img/fundo2.png"></img>
    </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;

//Fim renderização

const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let lockCard = false;

function flipCard(){
    if(lockCard) return false;
    listaClasses = this.classList
    if(listaClasses.contains('flip')) return false;
    this.classList.add('flip');
    if(!firstCard){
        firstCard=this;
        return false;
    }
    secondCard=this;    
checkForMatch();
};


function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;
    !isMatch ? disableCards():resetCards(isMatch);
}

function disableCards(){
    lockCard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
    },1000)
    
}

(function shuffle(){
    cards.forEach(card=>{
        let rand = Math.floor(Math.random()*12);
        card.style.order = rand;
    })
})();

function resetCards(isMatch = false){
    if(isMatch){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
    [firstCard, secondCard, lockCard] = [null, null, false];
    
}

cards.forEach(card=>card.addEventListener('click', flipCard));

}


buttonChange.addEventListener('click', ()=>{loadImages()});