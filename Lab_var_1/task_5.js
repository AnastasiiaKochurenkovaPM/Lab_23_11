//Функція повертає число днів відповідно до місяця і року
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
  
//Функція виводу інформації
function generation(month,year) {
    console.log ("Число днів у " + month + "-му місяці в " + year  +" році - "+ daysInMonth(month, year));
}

let month_1 = 5;
let year_1 = 2021;

let month_2 = 2;
let year_2 = 2020;

let month_3 = 8;
let year_3 = 2022;

generation(month_1,year_1);
generation(month_2,year_2);
generation(month_3,year_3);