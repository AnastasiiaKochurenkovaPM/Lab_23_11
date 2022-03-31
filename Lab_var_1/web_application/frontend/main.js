const express = require("express");

const path = require("path");

const exp = express();

const PORT = process.env.npm_package_config_port_frontend || 8080;

const USE_DB = process.argv[2] === "use_db=true" ? true : false;
const SERVER_PORT = process.env.npm_package_config_port_backend || 3000;

const dir_proj = path.join(__dirname, "/../../");

const dir_front = __dirname;

const dir_views = path.join(dir_front, "/views");

exp.use(express.static(dir_proj));

exp.set("view engine", "ejs");

exp.set("views", dir_views);

// ...............................................................................................
// Налаштовуємо маршрутизацію

// ... для головної сторінки
exp.get(["/", "/index"], (req, res) => {
  res.render("pages/index", { title: "Головна сторінка",
                              use_db: USE_DB,
                              server_port: SERVER_PORT,
                              page_id: "0" });
});

// ... для сторінки "Поїзди"
exp.get("/Train", (req, res) => {
  res.render("pages/Ticket", { title: "Поїзди",
                                  use_db: USE_DB,
                                  server_port: SERVER_PORT,
                                  add_button: "Додати новий потяг",
                                  page_id: "1" });
});

// ... для сторінки "Пасажири"
exp.get("/Passenger", (req, res) => {
  res.render("pages/Ticket", { title: "Пасажири",
                                use_db: USE_DB,
                                server_port: SERVER_PORT,
                                add_button: "Додати нового пасажира",
                                page_id: "2" });
});

// ... для сторінки "Квитки"
exp.get("/Ticket", (req, res) => {
  res.render("pages/Train", { title: "Квитки",
                                 use_db: USE_DB,
                                 server_port: SERVER_PORT,
                                 add_button: "Додати новий квиток",
                                 page_id: "3" });
});

// ... для сторінки "Продані квитки"
exp.get("/SoldTicket", (req, res) => {
  res.render("pages/Ticket", { title: "Продані квитки",
                                       use_db: USE_DB,
                                       server_port: SERVER_PORT,
                                       add_button: "-",
                                       page_id: "4" });
});

// ... для помилкової сторінки - "Сторінку не знайдено"
exp.use((req, res) => {
  res.status(404);
  res.render("pages/404", { title: "Error 404",
                            use_db: USE_DB,
                            server_port: SERVER_PORT,
                            page_id: "-1",
                            path: req.path });
});

// ...............................................................................................

// Запускаємо локальний сервер
exp.listen(PORT);

// Виводимо інформаційне повідомлення
console.log(`Frontend server is started on ${PORT} port`);
console.log(`Url: http://localhost:${PORT}`);