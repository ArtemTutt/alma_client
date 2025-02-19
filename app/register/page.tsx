"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormDataStore } from "../store";

type FormData = {
    name: string;
    birthdate: string;
    gender: string;
    interests: string[];
    preferences: string[];
}

export default function Register() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        birthdate: "",
        gender: "",
        interests: [],
        preferences: [],
    });

    const router = useRouter();
    const { setFormData: setGlobalFormData } = useFormDataStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            interests: checked
                ? [...prev.interests, name]
                : prev.interests.filter(interest => interest !== name)
        }));
    };

    const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            preferences: checked
                ? [...prev.preferences, name]
                : prev.preferences.filter(preference => preference !== name)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setGlobalFormData(formData);
        console.log("Форма отправлена:", formData);
        router.push('/main');
    };


    // Добавление изера в базу данных
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('/api/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (!response.ok) throw new Error('Registration failed');

    //         const result = await response.json();
    //         console.log('User created:', result);
    //         // Здесь можно добавить редирект или обновление состояния
    //         router.push('/main');
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-text">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[95%] max-w-md">
                <h2 className="text-2xl font-serif mb-4 text-center">Регистрация</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Имя</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Дата рождения</label>
                        <input
                            type="date"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Пол</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-primary focus:border-primary"
                            required
                        >
                            <option value="">Выберите...</option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Текущий интерес к духовным практикам</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {["Медитация", "Йога", "Энергетические практики"].map((interest) => (
                                <label key={interest} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name={interest}
                                        onChange={handleInterestChange}
                                        className="mr-2"
                                    />
                                    {interest}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Предпочтения</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {["Human Design", "Таро", "Натальная карта"].map((pref) => (
                                <label key={pref} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name={pref}
                                        onChange={handlePreferenceChange}
                                        className="mr-2"
                                    />
                                    {pref}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg shadow-md hover:bg-opacity-80 transition"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
}
