import { EROLES } from "./enums";

declare interface IUser {
  id: string;
  email: string;
  name: string;
  role: EROLES;
}

declare interface ILoginResponse {
  data: IUser;
  token: string;
}
