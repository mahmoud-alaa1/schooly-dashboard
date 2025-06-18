declare interface ITeacher {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
}

declare interface ITeacherPostData {
  name: string;
  dateOfBirth: string;
  email: string;
  gender: number;
  password: string;
}
