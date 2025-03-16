const pool = require("./pool");

async function getAllMessage() {
  const { rows } = await pool.query("SELECT * FROM user_messages");

  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM user_messages WHERE id = $1", [id]);
  return rows[0]
}

async function createMessage(message, username) {
  await pool.query("INSERT INTO user_messages(message, username) VALUES ($1, $2)", [message, username]);
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM user_messages WHERE id = $1 RETURNING *", [id]);
}

module.exports = {
  getAllMessage,
  getMessage,
  createMessage,
  deleteMessage
}