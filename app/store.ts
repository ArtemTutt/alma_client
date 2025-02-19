// store.ts
import { create } from 'zustand'

interface FormDataState {
    formData: {
        name: string;
        birthdate: string;
        gender: string;
        interests: string[];
        preferences: string[];
    };
    setFormData: (data: FormDataState['formData']) => void;
}

export const useFormDataStore = create<FormDataState>((set) => ({
    formData: {
        name: '',
        birthdate: '',
        gender: '',
        interests: [],
        preferences: [],
    },
    setFormData: (data) => set({ formData: data }),
}));