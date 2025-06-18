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
