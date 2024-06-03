const cardList = document.querySelector('.cardList');
let score = 0
const full = document.querySelector('p');
const picture = document.querySelector('img');
buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + -12)//make it start at 1 not 0
}, 2000);

cardList.addEventListener('click', function(e){
    full.textContent = 'Score = ' + score;
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        score +=2;
        e.target.classList.remove('active')
        e.target.classList.add('inactive');
        return
    } else {
        score += 1;
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval)
    }
    if (score>=200) {
        picture.src = 'https://t4.ftcdn.net/jpg/03/12/81/57/360_F_312815797_JJuraT0z0cwYeO4gTJYiVAn1MCMEoI8x.jpg'
    }
});
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<1300; i++){
        addCard('starter');
    }
}
