const getNextId = (array, currentId) => {
    
    const sortedArray = array
        .filter(ar => !ar.isDeleted && ar.isActive)
        .slice()
        .sort(function (a, b) { return a.id - b.id })
        .map(a => a.id);
        
    const idIndex = sortedArray.findIndex(id => id === currentId);

    if (idIndex + 1 === sortedArray.length) {
        return null;
    } else {
        return sortedArray[idIndex + 1];
    }
};

export default getNextId;
