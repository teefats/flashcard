const cardsContainer =document.querySelector("#cards-container");
const prevBtn =document.querySelector("#prev");
const nextBtn =document.querySelector("#next");
const currentEl =document.querySelector("#current");
const hideBtn =document.querySelector("#hide");
const showBtn =document.querySelector("#show");
const question =document.querySelector("#question");
const answer =document.querySelector("#answer");
const addCardBtn =document.querySelector("#add-card");
const clearBtn =document.querySelector("#clear");
const addContainer =document.querySelector("#add-container");


// keep track o current Card
let currentActiveCard = 0;

// Store DOM cards
const cardEl = [];


// store Card data
const cardsData = [
    {
        question:'Who killed Waldo?',
        answer:"Joel Cairo killed Waldo"
    },
    {
        question:'Who is a variable?',
        answer:"Container for a piece of data"
    },
     {
        question:'Example of Case Variable',
        answer:"thisIsAVariable"
    },

];

// Create all cards
function createCards(){
    cardsData.forEach((data, index) => createCards(data, index))
}

// Create a single card in dom
function createCard(data, index) {
    const card = document.createElement("div")
    card.classList.add('card');

    if (index ===0) {

card.classList.add('active')

    }

    card.innerHTML= `
    
    <div class="inner-card">
                    <div class="inner-card-front">
                        <p>
                            ${data.question}
                        </p>

                    </div>
                    <div class="inner-card-back">
                        <p>${data.answer}</p>
                    </div>
                </div>
    
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards
    cardsEl.push(card);
    cardsContainer.appendChild(card);

    updateCurrentText();



}

// show number of cards

function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/$
    {cardsEl.length}`
}
createCards();