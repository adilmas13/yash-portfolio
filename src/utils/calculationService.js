export const getAge = date => {
    let birth = new Date(date);
    let check = new Date();
    let milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;
    let ageInDays = (check - birth) / milliDay;
    return Math.floor(ageInDays / 365);
}

export const getExperience = startDate => {
    let diff = Date.now() - (new Date(startDate)).getTime();
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(days / 365);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    }
}
