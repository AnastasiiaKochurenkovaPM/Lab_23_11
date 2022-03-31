const mod = require('../custom_modules');

// Додавання потяга
let tr1 = mod.add_Train("Train_1", "Kyiv - Odessa");
let tr2= mod.add_Train("Train_2", "Uzgorod - Genichinsk");
let tr3 = mod.add_Train("Train_3", "Kharkiv - Lviv");
let tr4 = mod.add_Train("Train_4", "Odessa - Kharkiv");
let tr5 = mod.add_Train("Train_5", "Kharkiv - Kyiv");

// Список потягів
mod.get_Trains_List();

// Видалення потяга
console.log("Train removal: Train_2");
mod.remove_Train(tr2.name, tr2.direction);

// Список потягів
mod.get_Trains_List();

// Зміна потяга
console.log("Train replacement: Train_1");
mod.edit_Train (tr1.name, tr1.direction, "Train_456", "Kyiv - Lviv");

// Список потягів
mod.get_Trains_List();

// Пошук потягів
let temp1 = mod.find_Train ("Train_5", "Kharkiv - Kyiv");
console.log(`Train search Train_5 -> Kharkiv - Kyiv : ${temp1 !== -1 ? "found" : "not found"}`);
let temp2 = mod.find_Train("Train_10", "Kyiv - Uzgorod");
console.log(`Train search Train_10 -> Kyiv - Uzgorod : ${temp2 !== -1 ? "found" : "not found"}`);
////////////////////////////////////////////////////////////////////////////////////

// Додавання пасажира
mod.add_Passenger("Петро Іванович", 3809800035);
mod.add_Passenger("Андрій Богданович", 3809675453);
mod.add_Passenger("Оксана Петрівна", 3809765542);
mod.add_Passenger("Ольга Іванівна", 3809756892);


// Список усіх пасажирів
mod.get_Passenger_List ();

// Видалення пасажирів
console.log("Removal of the passenger: Оксана Петрівна");
mod.remove_Passenger("Оксана Петрівна", 3809765542);

// Список  усіх пасажирів
mod.get_Passenger_List();


// Пошук пасажирів
let pas1 = mod.find_Passenger ("Оксана Михалівна", 3802369546);
console.log(`Passenger search - Оксана Михалівна number-3802369546 : ${pas1 !== -1 ? "found" : "not found"}`);
let pas2 = mod.find_Passenger("Андрій Богданович", 3809675453);
console.log(`Passenger search - Андрій Богданович number-3809675453 : ${pas2 !== -1 ? "found" : "not found"}`);

// Заміна пасажира
console.log("\nPassenger replacement: Петро Іванович");
mod.edit_Passenger ("Петро Іванович", 3809800035, "Петро Петрович", 3809815035);

// Список  усіх пасажирів
mod.get_Passenger_List();

///////////////////////////////////////////////////////////////////////////////////////

// //Покупка пасажиром квитка на потяг
mod.buy_Ticket("Оксана", 100, "Train_3", "Kharkiv - Lviv", 1);
mod.buy_Ticket("Петро", 200, "Train_4", "Odessa - Kharkiv", 3);
mod.buy_Ticket("Андрій", 100, "Train_5", "Kharkiv - Kyiv", 1);
mod.buy_Ticket("Катерина", 100, "Train_4", "Odessa - Kharkiv", 2);
mod.buy_Ticket("Юрій", 200, "Train_3", "Kharkiv - Lviv", 3);
mod.buy_Ticket("Юлія", 200, "Train_4", "Odessa - Kharkiv", 4);


// Вивід пасажирів поїздів
console.log("\nTrain passengers Train_4 : ")
mod.get_sold_ticket_list("Train_4", "Odessa - Kharkiv");
console.log();
console.log("Train passengers Train_3 : ")
mod.get_sold_ticket_list("Train_3", "Kharkiv - Lviv");
console.log();
console.log("Train passengers Train_5 : ")
mod.get_sold_ticket_list("Train_5", "Kharkiv - Kyiv");

//Заміна одного квитка на інший
console.log(`Replacement ticket for Катерина ...`)
mod.edit_Ticket ("Катерина", 100, "Train_4", "Odessa - Kharkiv", 2, "Train_5", "Kharkiv - Kyiv", 3)

console.log("\nTrain passengers Train_4 : ")
mod.get_sold_ticket_list("Train_4", "Odessa - Kharkiv");
console.log();
console.log("Train passengers Train_3 : ")
mod.get_sold_ticket_list("Train_3", "Kharkiv - Lviv");
console.log();
console.log("Train passengers Train_5 : ")
mod.get_sold_ticket_list("Train_5", "Kharkiv - Kyiv");


//Скасування квитка покупця
console.log(`Ticket removal : customer Юрій | train Train_3 | direction Kharkiv - Lviv | place 3 \n`);
mod.remove_buy_Ticket ("Юрій", 200, "Train_3", "Kharkiv - Lviv", 3);

console.log("\nTrain passengers Train_4 : ")
mod.get_sold_ticket_list("Train_4", "Odessa - Kharkiv");
console.log();
console.log("Train passengers Train_3 : ")
mod.get_sold_ticket_list("Train_3", "Kharkiv - Lviv");
console.log();
console.log("Train passengers Train_5 : ")
mod.get_sold_ticket_list("Train_5", "Kharkiv - Kyiv");

// Пошук потягу у якому купили найбільше і найменше квитків
mod.search_min_max();

console.log("\n\t\t\t END!")
