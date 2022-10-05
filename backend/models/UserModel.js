import { Sequelize } from "sequelize";

import db from "../config/database.js"

const { DateType } = Sequelize;

const User = db.define(
  "User",
  {
    title: {
      Type: DateType.STRING,
    },
    price: {
      Type: DateType.DOUBLE,
    },
  },
  { freezeTableName: true }
);

export default User;