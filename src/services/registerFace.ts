import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function registerFaceService(data: FormData) {
  try {
    const response = await api.post<{ message: string }>(
      "/face-recognition/register-face",
      data
    );
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
