declare interface ITeacher {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  photoUrl: string | null;
}

declare interface ITeacherPostData {
  name: string;
  dateOfBirth: string;
  email: string;
  gender: number;
  password: string;
}

declare interface ITeacherPutData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl: string;
  gender: number;
}
