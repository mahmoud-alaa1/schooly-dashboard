import { z } from "zod";

export const registerTeacherSchema = z.object({
  name: z
    .string({
      required_error: "الاسم مطلوب",
    })
    .trim()
    .min(1, "الاسم مطلوب"),
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
  phoneNumber: z
    .string({
      required_error: "رقم الهاتف مطلوب",
    })
    .min(11, "رقم الهاتف غير صالح")
    .max(11, "رقم الهاتف غير صالح"),
});
export const updateTeacherSchema = registerTeacherSchema.partial();

export type registerTeacherSchema = z.infer<typeof registerTeacherSchema>;
export type updateTeacherSchema = z.infer<typeof updateTeacherSchema>;
