import api from "@/lib/axios";
import { PAGE_SIZE } from "@/lib/constants/pagination";
import { isAxiosError } from "axios";

export async function postTeacher(data: ITeacherPostData) {
  try {
    const response = await api.post(`/teacher`, data);
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

export async function getAllTeachers({
  Page = 1,
  PageSize = PAGE_SIZE,
}: {
  Page?: number | string;
  PageSize?: number | string;
}) {
  console.log(Page);
  try {
    const response = await api.get<IPaginatedResponse<ITeacher>>(
      `/teacher/all`,
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
      throw new Error(
        error.response?.data?.message || "حدث خطأ في جلب المعلمين"
      );
    }
    throw error;
  }
}

export async function editTeacher(id: string, data: ITeacherPostData) {
  try {
    const response = await api.put<{ message: string }>(`/teacher/${id}`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(
        error.response?.data?.message || "حدث خطأ في تعديل بيانات المعلم"
      );
    }
    throw error;
  }
}

export async function deleteTeacher(id: string) {
  try {
    const response = await api.delete<{ message: string }>(`/teacher/${id}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message || "حدث خطأ في حذف المعلم");
    }
    throw error;
  }
}
