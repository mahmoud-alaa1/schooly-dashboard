import api from "@/lib/axios";
import { createClassroomSchema } from "@/schemas/classroomsSchema";
import { isAxiosError } from "axios";

export async function getAllClassrooms({
  page = 1,
  pageSize = 10,
}: {
  page?: number | string;
  pageSize?: number | string;
}) {
  try {
    const response = await api.get<IPaginatedResponse<IClassroom>>(
      `/classroom/all`,
      {
        params: {
          page,
          pageSize,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما في الحصول على الصفوف"
      );
    }
    throw error;
  }
}

export async function getSingleClassroom(id: string) {
  try {
    const response = await api.get<ISingleClassroomResponse>(
      `/classroom?id=${id}`
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما في الحصول على الصف المعين"
      );
    }
    throw error;
  }
}
export async function getUserClassrooms() {
  try {
    const response = await api.get(`/user/classrooms`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "حدث خطأ ما في الحصول على فصولك الدراسية"
      );
    }
    throw error;
  }
}

export async function postClassroom(data: createClassroomSchema) {
  try {
    const response = await api.post(`/classroom`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما انشاء الفصل الدراسي"
      );
    }
    throw error;
  }
}

export async function putClassroom(data: IClassroomPutData) {
  try {
    const response = await api.put(`/classroom`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما في تحديث الفصل الدراسي"
      );
    }
    throw error;
  }
}

export async function deleteClassroom(id: string) {
  try {
    const response = await api.delete(`/classroom?id=${id}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ ما في حذف الفصل الدراسي"
      );
    }
    throw error;
  }
}

export async function assginClassroomStudent(data: {
  StudentId: string;
  ClassRoomId: string;
}) {
  try {
    const response = await api.post<{ message: string }>(
      `/classroom/assign-studnet?StudentId=${data.StudentId}&ClassRoomId=${data.ClassRoomId}`
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "حدث خطأ ما في تعيين الطالب للفصل الدراسي"
      );
    }
    throw error;
  }
}

export async function unAssginClassroomStudent(data: {
  StudentId: string;
  ClassRoomId: string;
}) {
  try {
    const response = await api.delete<{ message: string }>(
      `/classroom/unassign-student?StudentId=${data.StudentId}&ClassRoomId=${data.ClassRoomId}`
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "حدث خطأ ما في حذف الطالب من الفصل الدراسي"
      );
    }
    throw error;
  }
}

export async function assginClassroomTeacher(data: {
  TeacherId: string;
  ClassRoomId: string;
}) {
  try {
    const response = await api.put<{ message: string }>(
      `/classroom/assign-teacher?TeacherId=${data.TeacherId}&ClassRoomId=${data.ClassRoomId}`,
      {}
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "حدث خطأ ما في تعيين الطالب للفصل الدراسي"
      );
    }
    throw error;
  }
}
