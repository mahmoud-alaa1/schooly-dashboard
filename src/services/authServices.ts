import api from "@/lib/axios";
import type { ILoginResponse } from "@/types/login";
import { isAxiosError } from "axios";

export async function loginsService(data: {
  email: string;
  password: string;
  rememberMe: boolean;
}) {
  try {
    const response = await api.post<ILoginResponse>(`/auth/login`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما حاول مرة أخرى"
      );
    }
    throw error;
  }
}
