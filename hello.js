const daysOfTheWeek = ["Sunday, Monday, Tuesday", "Wednesday",
                       "Thurdsy", "Friday", "Saturday"];

let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
alert(`Hello, world! Happy $(dayName).`);
