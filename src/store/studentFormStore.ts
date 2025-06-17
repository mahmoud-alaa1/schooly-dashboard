import { create } from "zustand";
import { persist } from "zustand/middleware";
import { registerStudentSchema } from "@/schemas/studentSchema";

type State = {
  formData: registerStudentSchema | null;
};

type Actions = {
  setFormData: (data: registerStudentSchema) => void;
  clearFormData: () => void;
};

export const useStudentForm = create<State & Actions>()(
  persist(
    (set) => ({
      formData: null,
      setFormData: (data) => set({ formData: data }),
      clearFormData: () => set({ formData: null }),
    }),
    {
      name: "student-form-storage",
    }
  )
);
