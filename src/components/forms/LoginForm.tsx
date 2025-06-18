import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema";
import { Form } from "../ui/form";
import useLogin from "@/hooks/authentication/useLogin";
import FormPassword from "../forms-fields/FormPassword";
import FormCheckbox from "../forms-fields/FormCheckbox";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import FormInput from "../forms-fields/FormInput";
import { Mail } from "lucide-react";
const defaultValues: loginSchema = {
  email: "studentmanagementsystem06@gmail.com",
  password: "admin123",
  rememberMe: true,
};
export default function LoginForm() {
  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });
  const { mutate, isPending } = useLogin();

  function onSubmit(values: loginSchema) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormInput<loginSchema>
          control={form.control}
          name="email"
          label="البريد الالكتروني"
          placeholder="example@gmail.com"
          autoComplete="email"
          Icon={<Mail size={16} />}
        />
        <FormPassword<loginSchema>
          control={form.control}
          name="password"
          label="كلمة المرور"
          placeholder="ادخل كلمة المرور"
          autoComplete="current-password"
        />
        <div className=" flex justify-between text-[12px]">
          <FormCheckbox
            control={form.control}
            name="rememberMe"
            label="إحتفظ بالجلسة"
          />
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isPending}
        >
          {isPending ? <Spinner /> : "تسجيل الدخول"}
        </Button>
      </form>
    </Form>
  );
}
