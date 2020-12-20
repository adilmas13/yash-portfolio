export const getAge = date => {
    let birth = new Date(date);
    let check = new Date();
    let milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;
    let ageInDays = (check - birth) / milliDay;
    return Math.floor(ageInDays / 365 );
}
