import { z } from "zod";

export const registerTeacherSchema = z.object({
  name: z.string({
    required_error: "الاسم مطلوب",
  }),
  dateOfBirth: z.coerce.date({
    required_error: "تاريخ الميلاد مطلوب",
  }),
  email: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
    })
    .email("البريد الإلكتروني غير صالح"),
  password: z
    .string({
      required_error: "كلمة المرور مطلوبة",
    })
    .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف"),
  gender: z.coerce.number({
    required_error: "النوع مطلوب",
  }),
});

export type registerTeacherSchema = z.infer<typeof registerTeacherSchema>;
