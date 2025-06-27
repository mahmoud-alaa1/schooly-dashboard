import { z } from "zod";

export const registerFaceSchema = z.object({
  userId: z
    .string({
      required_error: "معرف المستخدم مطلوب",
    })
    .trim(),
  Image: z
    .instanceof(File, {
      message: "يجب أن تكون الصورة من نوع ملف",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "حجم الصورة يجب أن يكون أقل من 5 ميجابايت",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "نوع الصورة يجب أن يكون JPEG أو PNG أو WebP",
      }
    ),
});

export type RegisterFaceSchema = z.infer<typeof registerFaceSchema>;
