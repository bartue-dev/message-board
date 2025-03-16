#! /usr/bin/env node

const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const SQL = `
  CREATE TABLE IF NOT EXISTS user_messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  message VARCHAR(255), username VARCHAR(255), 
  date TIMESTAMP DEFAULT NOW()
  );

  INSERT INTO user_messages(message, username)
  VALUES ('Lets go!!', 'Bartue'), ('Iloveyouu', 'Mutya');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();