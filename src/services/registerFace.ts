import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function registerFaceService(data: FormData) {
  console.log("Registering face with data:", data);
  try {
    const response = await api.post<{ message: string }>(
      "/face-recognition/register-face",
      data
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما حاول مرة أخرى"
      );
    }
    throw error;
  }
}
