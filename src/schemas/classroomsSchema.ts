import { z } from "zod";

export const createClassroomSchema = z.object({
  grade: z.string({
    required_error: "الصف الدراسي مطلوب",
  }),
  subject: z
    .string({
      required_error: "المادة الدراسية مطلوبة",
    })
    .trim(),
});

export const AssignStudentClassroomSchema = z.object({
  StudentId: z
    .string({
      required_error: "معرف الطالب مطلوب",
    })
    .trim(),
  ClassRoomId: z.string({
    required_error: "معرف الفصل الدراسي مطلوب",
  }),
});

export const AssignTeacherClassroomSchema = z.object({
  TeacherId: z
    .string({
      required_error: "معرف الطالب مطلوب",
    })
    .trim(),
  ClassRoomId: z.string({
    required_error: "معرف الفصل الدراسي مطلوب",
  }),
});

export type createClassroomSchema = z.infer<typeof createClassroomSchema>;
export type AssignStudentClassroomSchema = z.infer<
  typeof AssignStudentClassroomSchema
>;
export type AssignTeacherClassroomSchema = z.infer<
  typeof AssignTeacherClassroomSchema
>;
