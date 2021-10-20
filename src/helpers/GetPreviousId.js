const getPreviousId = (array, currentId) => {
    const sortedArray = array
        .filter(ar => !ar.isDeleted && ar.isActive)
        .slice()
        .sort(function (a, b) { return a.id - b.id })
        .map(a => a.id);
    const idIndex = sortedArray.findIndex(id => id === currentId);

    if (idIndex === 0) {
        return null;
    } else {
        return sortedArray[idIndex - 1];
    }
};

export default getPreviousId;
