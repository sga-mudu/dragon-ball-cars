import { characters } from "./characters.js";
// const today = new Date();

// console.log(today);
// console.log(Math.sqrt(16));


const title = document.querySelector("h1");
const button = document.querySelector(".random-button");
const cardContainer = document.querySelector("#card-container");

document.addEventListener("DOMContentLoaded", () =>{
    title.textContent = "Dragon Ball Character Card";
    title.className = "title";
    title.id = "main-title";
    title.classList.remove("main-title");

    button.textContent = "Choose A Random Card";

    characters.map((character) => createCard(character));

    button.addEventListener("click", chooseRandomCard);


});

const createCard = (character) => {
    const div = document.createElement("div");
    div.className = "card";


    div.innerHTML = `
        <div class="inner-container">
            <div class="images">
                <img class="background" src="${character.background}" alt="">
                <img class="character" src="${character.fighter}" alt="">
             </div>
            <div class="info">
                <h2>${character.name}</h2>
                <span>Super Move: ${character.superMove}</span>
                <div class="stats">
                    <span>Strength: ${character.strength}</span>
                    <span>Speed: ${character.speed}</span>
                    <span>Energy: ${character.energy}</span>
                    <span>Defense: ${character.defense}</span>
                </div>
            </div>
        </div>
    `;


    cardContainer.appendChild(div);
};


const chooseRandomCard = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => card.classList.remove("chosen"));

    const randomIndex =  Math.floor(Math.random() * characters.length);

    const randomCard = cards[randomIndex];
    randomCard.classList.add("chosen");

}


// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);

// console.log(numbers);
// console.log(doubled);

// numbers.forEach((number) => console.log(number));
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);






