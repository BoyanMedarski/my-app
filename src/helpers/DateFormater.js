const dateFormater = dateString => {
    let date = new Date(dateString);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);
};

export default dateFormater;
