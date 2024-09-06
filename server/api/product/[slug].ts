import { getConnection } from "../../db";

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug + ".html";

  if (!slug) {
    return { error: "Slug is required" };
  }

  const connection = await getConnection();

  try {
    const [rows] = await connection.execute(
      "SELECT * FROM iven_products WHERE uri = ?",
      [slug]
    );

    return rows;
  } catch (error) {
    console.error(error);
    return { error: "Database query failed" };
  } finally {
    await connection.end();
  }
});
