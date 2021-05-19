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
    user.hp = user.hp + newHPValue;

    setUser(user);
}

export function completeQuest(questId) {
    const user = getUser();

    //user.completed.somethingnewwwww
    setUser(user);

}
