import { create } from "zustand";
import { persist } from "zustand/middleware";

export function createFormStore<T>(storageName: string) {
  const store = create<{
    formData: T | null;
    setFormData: (data: T) => void;
    clearFormData: () => void;
  }>()(
    persist(
      (set) => ({
        formData: null,
        setFormData: (data) => set({ formData: data }),
        clearFormData: () => set({ formData: null }),
      }),
      { name: storageName }
    )
  );

  
  return store.getState();
}
