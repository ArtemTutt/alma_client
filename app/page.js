"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Проверяем наличие объекта Telegram.WebApp
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.init();
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      webApp.expand();
      // Получаем данные пользователя
      const user = webApp.initDataUnsafe?.user;
      if (user) {
        setUsername(user.first_name || 'Guest');
      }
    }
  }, []);



  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background text-text px-4">
      <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fadeIn text-center">
        Добро пожаловать в Alma {username}
      </h1>
      <p className="text-lg text-center max-w-md w-full mx-auto opacity-0 animate-slideUp">
        Исследуйте свой путь с помощью духовных практик. Пройдите регистрацию и
        начните прямо сейчас.
      </p>
      <div className="mt-6 opacity-0 animate-zoomIn">
        <Link href="/register">
          <button className="px-6 py-3 bg-primary text-white rounded-full text-lg shadow-md transition hover:bg-opacity-80">
            Начать
          </button>
        </Link>
      </div>
    </div>
  );
}
