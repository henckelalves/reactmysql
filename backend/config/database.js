import { Sequelize } from "sequelize";

const db = new Sequelize("mern_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3333,
});

export default db;
