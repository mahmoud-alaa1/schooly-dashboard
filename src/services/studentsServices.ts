import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function postStudent(data: IStudentPostData) {
  try {
    const response = await api.post(`/auth/register`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(
        error.response?.data?.message || "حدث خطأ في تسجيل الطالب"
      );
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
