import { z } from "zod";

export const registerStudentSchema = z.object({
  studentName: z
    .string({
      required_error: "الاسم مطلوب",
    })
    .min(1, "الاسم مطلوب"),

  studentEmail: z
    .string({
      required_error: "البريد الإلكتروني مطلوب",
    })
    .email("البريد الإلكتروني غير صالح"),

  password: z
    .string({
      required_error: "كلمة المرور مطلوبة",
    })
    .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف"),

  dateOfBirth: z.coerce.date({
    required_error: "تاريخ الميلاد مطلوب",
  }),

  gender: z.coerce.number({
    required_error: "النوع مطلوب",
  }),

  address: z
    .string({
      required_error: "العنوان مطلوب",
    })
    .min(1, "العنوان مطلوب"),

  dateOfJoining: z.coerce.date({
    required_error: "تاريخ الانضمام مطلوب",
  }),

  department: z.coerce
    .number({
      required_error: "القسم مطلوب",
    })
    .int()
    .nonnegative(),

  grade: z.coerce
    .number({
      required_error: "الصف الدراسي مطلوب",
    })
    .int()
    .nonnegative(),

  parentName: z
    .string({
      required_error: "اسم ولي الأمر مطلوب",
    })
    .min(1, "اسم ولي الأمر مطلوب"),

  parentRelation: z.coerce.number({
    required_error: "صلة القرابة مطلوبة",
  }),

  parentJob: z
    .string({
      required_error: "وظيفة ولي الأمر مطلوبة",
    })
    .min(1, "وظيفة ولي الأمر مطلوبة"),

  parentPhone1: z
    .string({
      required_error: "رقم الهاتف مطلوب",
    })
    .min(11, "رقم الهاتف غير صالح")
    .max(11, "رقم الهاتف غير صالح"),

  parentPhone2: z.string().optional(),
});

export type registerStudentSchema = z.infer<typeof registerStudentSchema>;
