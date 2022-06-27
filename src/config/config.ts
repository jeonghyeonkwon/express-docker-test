import * as dotenv from "dotenv";
dotenv.config();
type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  [key: string]: string | number;
};

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  development: {
    username: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    host: process.env.MYSQL_HOST!,
    port: Number(process.env.MYSQL_PORT)!,
    dialect: "mysql",
  },
  test: {
    username: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    host: process.env.MYSQL_HOST!,
    port: Number(process.env.MYSQL_PORT)!,
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    host: process.env.MYSQL_HOST!,
    port: Number(process.env.MYSQL_PORT)!,
    dialect: "mysql",
  },
};
export default config;
