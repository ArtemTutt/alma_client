import { NextResponse } from 'next/server';
import {addUser, initDB} from "../../../db.js"

export async function POST(req, res) {
    console.log(req)
    if (req.method === 'POST') {
      try {
        await initDB();
        const body = await req.json(); // Получаем данные из запроса
        const user = await addUser(body); // Сохраняем данные пользователя
        return NextResponse.json(user, { status: 200 });
      } catch (error) {
        console.error(error); // Логируем ошибку для дебага
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      console.log(req.method)
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}