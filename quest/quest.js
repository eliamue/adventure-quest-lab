import quests from '../quest-data.js';
import { findById } from '../utils.js';

const main = document.querySelector('main-section');


// decide which quest do we want to dynamically generate
const searchParams = new URLSearchParams(window.location.search);

//grab ID out of url
const id = searchParams.get('id');
console.log(id);

const quest = findById(quests, id);
console.log(quest);




//have to generate our quest and inject it into the main-section tag