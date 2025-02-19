import { JSONFile } from "lowdb/node";
import { Low } from 'lowdb'
import { nanoid } from "nanoid";


// Используем новый синтаксис импорта
const adapter = new JSONFile("db.json");
const db = new Low(adapter, {});


// Инициализация базы данных — выполняем один раз
async function initDB() {
  await db.read(); // Чтение базы данных из файла
  if (!db.data) {
    // Если `db.data` не существует, определяем базовую структуру
    db.data = { users: [] };
    await db.write(); // Записываем базовую структуру
  } else if (!Array.isArray(db.data.users)) {
    // На случай, если структура `users` повреждена
    db.data.users = [];
    await db.write();
  }
}


// Функция для добавления нового пользователя
async function addUser(userData) {
  const newUser = { id: nanoid(), ...userData };
  db.data.users.push(newUser);
  await db.write();
  return newUser;
}

// Функция для получения списка всех пользователей
function getUsers() {
  return db.data.users;
}

// Функция для получения пользователя по Telegram ID
function getUserByTelegramId(telegramId) {
  return db.data.users.find((user) => user.telegramId === telegramId);
}

// Экспорт функций
export { initDB, addUser, getUsers, getUserByTelegramId };