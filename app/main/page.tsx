"use client"
import { useState } from "react";
import ButtonComponent from "@/components/ui/button";
import { useFormDataStore } from "../store";

const UserProfile: React.FC = () => {
  const { formData } = useFormDataStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
      {/* Приветствие пользователя */}
      <div className="w-full max-w-md mb-8">
        <h2 className="text-2xl font-serif mb-4 mt-4 pl-4 pr-4 text-center w-[100%]">Путь познания себя c помощью Таро!</h2>
      </div>

      {/* Карточка с персональной картой архетипа */}
      <div className="bg-white p-6 rounded-[50px] shadow-lg w-[95%] max-w-md mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Персональная карта архетипа</h3>
        <p className="text-center mb-4">
          На основе ваших интересов: {formData.interests.join(", ")}, мы создали вашу персональную карту архетипа.
        </p>
        <div className="border-t border-gray-300 pt-4 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Имя:</span>
            <span>{formData.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Основной архетип:</span>
            <span>Мудрец</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Слоган:</span>
            <span>"Знание — сила"</span>
          </div>
          <div>
            <h4 className="font-semibold">Описание:</h4>
            <p className="text-sm mt-2">
              {formData.name} — яркий представитель архетипа Мудреца. Обладая стремлением к познанию и глубокому пониманию мира, она постоянно ищет мудрость и смысл во всех аспектах жизни. Для неё важно делиться знаниями с другими, преподавать и просвещать тех, кто жаждет обучаться.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Цели:</h4>
            <p className="text-sm mt-2">
              {formData.name} стремится к интеллектуальному росту и хочет быть признанной в своей области экспертом. Её долгосрочные цели связаны с научными исследованиями, публикациями и активным участием в образовательных программах.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Слабости:</h4>
            <p className="text-sm mt-2">
              Основная слабость {formData.name} — склонность к излишнему критицизму. Она может быть чрезмерно самокритична или критиковать других за недостаток знаний. Ещё одна рыса — легкая потеря связи с реальностью в поиске абстрактных истин, что иногда мешает ей полностью наслаждаться жизнью.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Пример в жизни:</h4>
            <p className="text-sm mt-2">
              Одна из иллюстративных ситуаций проявления архетипа Мудреца у {formData.name} случилась, когда она организовала и провела бесплатный курс по истории искусств для школьников в своём городе. Стараясь пробудить интерес к предмету, она применяла оригинальные методы обучения и вскоре завоевала популярность у учащихся и их родителей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

