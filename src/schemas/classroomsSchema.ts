import { z } from "zod";

export const createClassroomSchema = z.object({
  grade: z.string({
    required_error: "الصف الدراسي مطلوب",
  }),
  subject: z.string({
    required_error: "المادة الدراسية مطلوبة",
  }).trim(),
});

export type createClassroomSchema = z.infer<typeof createClassroomSchema>;
