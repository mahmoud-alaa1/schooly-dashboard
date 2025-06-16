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
      console.error(error);
      throw new Error(error.response?.data || "حدث خطأ ما حاول مرة أخرى");
    }
    throw error;
  }
}

// export async function forgetPasswordService(data: IForgetPasswordRequest) {
//   try {
//     const response = await api.post<IForgetPasswordResponse>(
//       `/auth/forgot-password`,
//       data
//     );
//     return response.data;
//   } catch (error) {
//     if (isAxiosError(error)) {
//       console.error(error);
//       throw new Error(error.response?.data || "حدث خطأ ما حاول مرة أخرى");
//     }
//     throw error;
//   }
// }

// export async function verifyCodeService(data: IVerifyCodeRequest) {
//   try {
//     const response = await api.post<IVerifyCodeResponse>(
//       `/auth/verify-code`,
//       data
//     );
//     return response.data;
//   } catch (error) {
//     if (isAxiosError(error)) {
//       throw new Error(error.response?.data || "حدث خطأ ما حاول مرة أخرى");
//     }
//     throw error;
//   }
// }

// export async function resetPasswordService(data: IResetPasswordRequest) {
//   try {
//     const response = await api.post<IResetPasswordResponse>(
//       `/auth/reset-password`,
//       data
//     );
//     return response.data;
//   } catch (error) {
//     if (isAxiosError(error)) {
//       throw new Error(error.response?.data || "حدث خطأ ما حاول مرة أخرى");
//     }
//     throw error;
//   }
// }
