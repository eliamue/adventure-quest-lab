import quests from '../quest-data.js';
import { findById } from '../utils.js';
import { changeGold, changeHP } from '../local-storage-utils.js';

// grab main DOM element
const main = document.querySelector('.main-section');

//
// decide which quest do we want to dynamically generate
const searchParams = new URLSearchParams(window.location.search);

//grab ID out of url
const id = searchParams.get('id');
console.log(id);

//grab quest id from URL
const quest = findById(quests, id);
console.log(quest);



const h1 = document.createElement('h1');
const p = document.createElement('p');
const img = document.createElement('img');

h1.textContent = quest.title;
img.src = `../assets/${quest.image}`;
p.textContent = quest.description;

const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = choice.id;
    
    label.append(choice.description, input);
    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'EAT IT';
form.append(button);

form.addEventListener('submit', (event) => {
    // always prevent that default nonsense
    event.preventDefault();

    //use formData thing to get user input
    const formData = new FormData(form);
    //figure out which choice id was selected by the user
    const choiceId = formData.get('choice');

    // we have a choice id and an array of choices, so we need to find the choice by id
    //use choice id and array of choices that livers in the quest to find the choice data
    const selectedChoice = findById(quest.choices, choiceId);

    changeGold(selectedChoice.gold);
    changeHP(selectedChoice.HP);
    //tell user about the consequences of the actions
    alert(selectedChoice.result);
    //take user back to list page
    window.location = '../list';
});
//put everything we built into the mian DOM element
main.appendChild(h1, p, img, form);


//have to generate our quest and inject it into the main-section tag