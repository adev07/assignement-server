import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "assignment_9t6t",
  "assignment_9t6t_user",
  "z0A9lJg79xvcDMnLN4eQWoFIFSlqITd0",
  {
    dialect: "postgres",
    host: "z0A9lJg79xvcDMnLN4eQWoFIFSlqITd0@dpg-cufpnp5svqrc73fscfpg-a.singapore-postgres.render.com",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
