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

export async function getAllStudents({
  Page = 1,
  PageSize = 10,
}: {
  Page?: number | string;
  PageSize?: number | string;
}) {
  console.log(Page);
  try {
    const response = await api.get<IPaginatedResponse<IStudent>>(
      `/student/all`,
      {
        params: {
          Page,
          PageSize,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message || "حدث خطأ في جلب الطلاب");
    }
    throw error;
  }
}

export async function editStudent(data: IStudentPutData) {
  try {
    const response = await api.put<{ message: string }>(`/student`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(
        error.response?.data?.message || "حدث خطأ في تعديل بيانات الطالب"
      );
    }
    throw error;
  }
}

export async function deleteStudent(id: string) {
  try {
    const response = await api.delete<{ message: string }>(`/student/${id}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message || "حدث خطأ في حذف الطالب");
    }
    throw error;
  }
}
