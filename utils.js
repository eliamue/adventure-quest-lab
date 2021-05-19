export function findById(questArray, id) {
    for (let item of questArray) {
        if (item.id === id)
            return item;
    }
}