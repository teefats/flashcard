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
        answer:"thisIs"
    },

]