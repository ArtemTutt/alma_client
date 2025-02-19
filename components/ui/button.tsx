import Link from "next/link";

export default function ButtonComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
      <div className="flex flex-col gap-6 p-8 max-w-md w-full rounded-xl">
        
        {/* Кнопка "Дизайн человека" */}
        <Link href="/human-design">
          <button className="w-[300px] py-3 bg-primary text-white rounded-lg text-lg font-medium shadow-md hover:bg-opacity-80 transition-transform transform hover:scale-105">
            Human Design
          </button>
        </Link>

        {/* Кнопка "Таро" */}
        <Link href="/tarot">
          <button className="w-[300px] py-3 bg-primary text-white rounded-lg text-lg font-medium shadow-md hover:bg-opacity-80 transition-transform transform hover:scale-105">
            Таро
          </button>
        </Link>

        {/* Кнопка "Карта рождения" */}
        <Link href="/birth-chart">
          <button className="w-[300px] py-3 bg-primary text-white rounded-lg text-lg font-medium shadow-md hover:bg-opacity-80 transition-transform transform hover:scale-105">
            Натальная карта
          </button>
        </Link>

      </div>
    </div>
  );
}
