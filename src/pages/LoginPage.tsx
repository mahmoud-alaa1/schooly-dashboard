import LoginForm from "@/components/forms/LoginForm";
import { UserRound } from "lucide-react";
export default function LoginPage() {
  return (
    <div className="h-screen  grid md:grid-cols-[45%_auto]">
      <div className="p-7 bg-white flex justify-center  flex-col space-y-4">
        <h1 className=" font-semibold text-xl mx-auto">أجيال المستقبل</h1>
        <div className="text-primary ">
          <div className="flex items-center gap-2 text-lg">
            <UserRound />
            <h2>سجل كموظف</h2>
          </div>
        </div>
        <LoginForm />
      </div>

      <div className="relative hidden md:block">
        <div className="absolute z-100 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
        <div className="absolute inset-0  flex items-center justify-center">
          <img
            src="/login-frame.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
