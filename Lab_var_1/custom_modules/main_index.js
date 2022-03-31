
// Клас - ПАСАЖИР
class Passenger {

  constructor (name, number) {

      this.name = name;
      this.number = number;

      if (typeof name === 'undefined') { this.name = "unknown passenger"; }
      if (typeof number === 'undefined') { this.number = "unknown passenger"; }

  }

}

let passenger_list = [];

// Додавання нового пасажира
function add_Passenger (name,number) {

  let passenger = new Passenger(name, number);
  passenger_list.push(passenger);

  return passenger;

}

// Пошук пасажира в колекції
function find_Passenger (name, number) {
  for (let passenger of passenger_list) {

      if (name === passenger.name && number === passenger.number) {
           return passenger;
     }
 }
  return -1;
}

// Редагування пасажира в колекції
function edit_Passenger (name, number, new_name, new_number) {

  let passenger = find_Passenger (name, number);

  if (passenger === -1) { return -1; }

  let n = passenger_list.indexOf(passenger);

  passenger_list[n].name = new_name;
  passenger_list[n].number = new_number;

  return true;

}

// Видалення пасажира в колекції
function remove_Passenger (name, number) {

  for (let n = 0; n < passenger_list.length; n++) {

      let passenger = passenger_list[n];

      if (passenger.name === name && passenger.number === number) {
          passenger_list.splice(n, 1);
          return 1;
      }
  }
  return -1;
}

// Отримати список пасажирів
function get_Passenger_List () {

  console.log("\n" + `List of all passenger:`);

  for (let n = 0; n < passenger_list.length; n++) {

      let passenger = passenger_list[n];
      console.log(`\tName passenger: ${passenger.name}, number: ${passenger.number}`);

  }

  console.log();

  return passenger_list;

}

exports.add_Passenger      = add_Passenger;
exports.edit_Passenger      = edit_Passenger;
exports.remove_Passenger    = remove_Passenger;
exports.find_Passenger     = find_Passenger;
exports.get_Passenger_List = get_Passenger_List;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Клас - КВИТОК
class Ticket {

  constructor (name_train,direction_train, num_place, sold) {
      this.name_train = name_train;
      this.direction_train = direction_train;
      this.num_place = num_place;
      this.sold = sold;


      if (typeof num_place === 'undefined') { this.num_place = `Ticket with such place ${num_place} not found `; }
      if (typeof name_train === 'undefined') { this.name_train =`Ticket with such place ${name_train} not found `; }
      if (typeof direction_train === 'undefined') { this.direction_train =`Ticket with such route  ${direction_train} not found `; }
  }
}

// Перевірка чи дані коректні і повернення сформованого квитка
function create_Ticket(name_train,direction_train, num_place ){
  let train = find_Train(name_train, direction_train);
  let ticket = new Ticket(name_train, direction_train, num_place, false);

          if(train != -1){
              train.global_ticket_list.push(ticket);
                  return 1;
              }else {
                  console.log(" Train not found! Ticket not create!");
                  return -1;
              }
}

// Покупка пасажиром квитка на потяг
function buy_Ticket(name_customer, number_customer, name_train, direction_train, num_place) {
  let passenger = new Passenger(name_customer, number_customer);

  if(passenger === find_Passenger(name_customer, number_customer)){

  } else{
     add_Passenger(name_customer, number_customer);
  }

  let ticket = new Ticket(name_train,direction_train, num_place,false);
  let train = find_Train(name_train,direction_train);

  for( let i = 0; i < train.global_ticket_list.length; i++){

      if( ticket.name_train ===  train.global_ticket_list[i].name_train && ticket.direction_train ===  train.global_ticket_list[i].direction_train && ticket.sold ===  train.global_ticket_list[i].sold ){

          train.global_ticket_list[i].sold = true;
          train.soldTicket_list.push(new SoldTicket(passenger, train.global_ticket_list[i]));
          console.log("Successful!");
          return 1;
      }
  }
}

// Пошук проданого квитка
function is_exist_sold_Ticket (train,sold_ticket){

   let mp = train.soldTicket_list;
  for( let i = 0; i < mp.length; i++){
      if( sold_ticket.ticket.name_train === mp[i].ticket.name_train && sold_ticket.ticket.direction_train === mp[i].ticket.direction_train && sold_ticket.ticket.num_place === mp[i].ticket.num_place && sold_ticket.ticket.sold === mp[i].ticket.sold
      ){ return 1;}
  }
      console.log(" Sorry, but ticket doesn't exist!");
      return -1;
}

// Скасувати покупку квитка пасажира
function remove_buy_Ticket (name_passenger, name_passenger, name_train, direction_train, num_place) {
  let train = find_Train(name_train, direction_train);
  let passenger = find_Passenger(name_passenger, name_passenger);
  let ticket = new Ticket(name_train, direction_train, num_place, true);
  let sold_ticket = new SoldTicket(passenger, ticket);

  if(is_exist_sold_Ticket(train,sold_ticket)){
     remove_ticket_from_sold_ticket_list(train,sold_ticket);
      return true;
  } return false;

}

//Зміна квитка із одного потяга на інший
function edit_Ticket (name_passenger, name_passenger, name_train, direction_train, num_place, new_name_train, new_direction_train, new_num_place) {
  if(remove_buy_Ticket(name_passenger, name_passenger, name_train, direction_train, num_place) ){
      if(buy_Ticket(name_passenger,name_passenger, new_name_train, new_direction_train, new_num_place) ) {
          console.log("Successful replacement!");
          return 1;
      } else {return  -1}
  }else {
      console.log("Error!")
      return -1;
  }
}

function output_ticket(ticket) {
  console.log(`Ticket: \n || train ${ticket.name_train} | direction  ${ticket.direction_train} | place ${ticket.num_place}| is_sold ${ticket.sold} ||\n`)
  return 1;
}
function output_passenger (passenger) {
   console.log(` ||${passenger.name} | number - ${passenger.number} ||\n`);
  return 1;
}


exports.create_Ticket = create_Ticket;
exports.is_exist_sold_Ticket = is_exist_sold_Ticket;
exports.remove_buy_Ticket = remove_buy_Ticket;
exports.edit_Ticket = edit_Ticket;
exports.buy_Ticket = buy_Ticket;
exports.output_ticket = output_ticket;
exports.output_passenger = output_passenger;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Класс ПРОДАНІ КВИТКИ
class SoldTicket{

  constructor (passenger, ticket) {
      this.passenger = passenger;
      this.ticket = ticket;
  }

}

// Вивід усіх проданих квитків і їх власників
function get_sold_ticket_list(train_name, train_direction) {
  let train = find_Train(train_name, train_direction);
  for (let n = 0; n < train.soldTicket_list.length; n++) {

      let mp = train.soldTicket_list[n];
      output_ticket(mp.ticket);
      output_passenger(mp.passenger);

  }
  console.log();
  return train.soldTicket_list;
}

// Видалення купленого квитка із бази даних
function remove_ticket_from_sold_ticket_list(train, sold_ticket) {
  let temp = -1;
  for (let n = 0; n < train.global_ticket_list.length; n++) {
      if (sold_ticket.ticket.name_train === train.global_ticket_list[n].name_train &&
          sold_ticket.ticket.direction_train === train.global_ticket_list[n].direction_train &&
          sold_ticket.ticket.num_place === train.global_ticket_list[n].num_place &&
          sold_ticket.ticket.sold === train.global_ticket_list[n].sold) {
          temp = n;
      }
  }
  for (let i = 0; i < train.soldTicket_list.length; i++) {

      if (sold_ticket.ticket.name_train === train.soldTicket_list[i].ticket.name_train &&
          sold_ticket.ticket.direction_train === train.soldTicket_list[i].ticket.direction_train &&
          sold_ticket.ticket.num_place === train.soldTicket_list[i].ticket.num_place &&
          sold_ticket.ticket.sold === train.soldTicket_list[i].ticket.sold) {

          remove_Passenger(sold_ticket.passenger.name, sold_ticket.passenger.number);
          train.soldTicket_list.splice(i, 1)
          console.log("The purchasea ticket has been deleted!");
      }
  }
  if(temp !== -1){
       train.global_ticket_list[temp].sold = false;
       console.log("Ticket/place is free!");
       return 1;
  }
  console.log("Error!");
      return -1;

}

// Пошук потяга на який продали найб. та найм. квитків
function search_min_max(){
  let min_count , max_count;
  min_count = max_count = global_train_list[0].soldTicket_list.length ;

  for (let i = 1; i < global_train_list.length; i++){
      let train = global_train_list[i];
      if( min_count > train.soldTicket_list.length){
          min_count = train.soldTicket_list.length;
      } else {
          if(max_count < train.soldTicket_list.length){
              max_count = train.soldTicket_list.length;
          }
      }
  }
  for (let j = 0; j <  global_train_list.length; j++){
      if( global_train_list[j].soldTicket_list.length == min_count){
          console.log(`Train (${global_train_list[j].name}) in the direction (${global_train_list[j].direction}) has the fewest tickets bought - ${min_count}.`)
      } else {
          if( global_train_list[j].soldTicket_list.length == max_count){
              console.log(`Train (${global_train_list[j].name}) in the direction (${global_train_list[j].direction}) has the most tickets bought - ${max_count}.`)
          }
      }
  }
  return 1;
}


exports.search_min_max = search_min_max;
exports.get_sold_ticket_list = get_sold_ticket_list;
exports.remove_ticket_from_sold_ticket_list = remove_ticket_from_sold_ticket_list;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Клас - ПОТЯГ
class Train {

  constructor (name,direction) {

      this.name = name;
      this.direction = direction;
      this.place_list = [1,2,3,4,5];
      this.global_ticket_list = [];
      this.soldTicket_list = [];


      if (typeof name === 'undefined')    { this.name = "unknown train"; }
      if (typeof direction === 'undefined') { this.direction= "unknown train"; }

  }

}


// Список усіх потягів
let global_train_list = [];

// Додавання нового потяга в колекцію
function add_Train (name, direction) {

  let train = new Train(name, direction);
  global_train_list.push(train);
 for ( let i = 0; i < train.place_list.length; i++){
     create_Ticket(name, direction, train.place_list[i])
  }

  return train;
}

// Знайти потяг в колекції
function find_Train (name, direction) {

  for (let train of global_train_list) {

      if (name === train.name && direction === train.direction) {
          return train;
      }
  }
    return -1;
}


// Редагувати потяг в колекції
function edit_Train (name, direction, new_name, new_direction) {
  remove_Train (name, direction);
  add_Train (new_name, new_direction)
  return 1;

}

// Видалити потяг з колекції
function remove_Train (name, direction) {

  for (let n = 0; n < global_train_list.length; n++) {

      let train = global_train_list[n];

      if (train.name === name && train.direction === direction) {

          for (let i of train.soldTicket_list) {
              remove_buy_Ticket (i.passenger.name, i.passenger.number, i.ticket.name_train, i.ticket.direction_train, i.ticket.num_place);
          }
          global_train_list.splice(n, 1);
          return 1;
      }

  }

  return -1;

}


// Отримати список потягів
function get_Trains_List() {

  console.log("\n" + "List of all trains:" + "\n" );

  for (let n = 0; n < global_train_list.length; n++) {

      let train = global_train_list[n];
      console.log(` Train: ${train.name} \n Direction: ${train.direction} \n Tickets/Places:`);
      for (let k of train.global_ticket_list) {
          output_ticket(k);
      }
      console.log("\n")
  }

  console.log();

  return global_train_list;

}

exports.add_Train       = add_Train;
exports.find_Train      = find_Train;
exports.edit_Train      = edit_Train;
exports.remove_Train    = remove_Train;
exports.get_Trains_List = get_Trains_List;