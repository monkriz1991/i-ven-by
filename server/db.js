import mysql from "mysql2/promise";

export async function getConnection() {
  const connection = await mysql.createConnection({
    host: "93.125.2.23",
    port: 55066,
    user: "test",
    password: "test12345",
    database: "iven",
  });

  return connection;
}
