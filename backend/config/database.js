import { Sequelize } from "sequelize";

const db = new Sequeliz('CRUD','root', '', {

     host: "localhost",
     dialect: "mysql"

});

export default db;