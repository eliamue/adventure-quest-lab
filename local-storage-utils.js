import quests from "./quest-data";

const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    if (!user) return {};

    const user = JSON.parse(stringyUser);

    return user;

}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function changeGold(newGoldValue) {
    const user = getUser();
    user.gold = user.gold + newGoldValue;

    setUser(user);
}

export function changeHP() {
    const user = getUser();
    // so if we pass in 10, add 10 hp to the current user hp value
    user.hp = user.hp + newHPValue;

    setUser(user);
}
// questId could be treasure, monsters, or dragon
export function completeQuest(questId) {
    const user = getUser();

    user.completed[questId] = true;
    setUser(user);
}

export function userHasCompletedAllQuests() {
    const user = getUser();
    //does rthe number of keys in this object equal our quest array?

    // return Object.keys(user.completed).length === quests.length;

    // if user.completed.treasure === true;
    // if user.completed.dragon === true;
    // if user.completed.monster === true;
    // then return true
    for (let quest of quests) {
        // if the user hasn't completed this quest, return false
        if (!user.completed[quest.id]) return false;
        //if no falsies come up in array, that means the user has completed them all
    } return true;
}
 
export function userDied() {
    const user = getUser();
    return user.hp <= 0;
}