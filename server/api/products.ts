import { getConnection } from "../db";

export default defineEventHandler(async (event) => {
  const connection = await getConnection();

  const [rows] = await connection.execute(
    "SELECT * FROM iven_products LIMIT 5"
  );
  await connection.end();

  return rows;
});
