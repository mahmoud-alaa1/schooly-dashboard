declare interface IStudentPostData {
  studentName: string;
  studentEmail: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: number;
  address: string;
  dateOfJoining: string;
  department: number;
  grade: number;
  parentName: string;
  parentRelation: number;
  parentJob: string;
  parentPhone1: string;
  parentPhone2?: string;
}

declare interface IPostStudentResponse {
  data: {
    test: string;
  };
}

declare interface IStudent {
  id: string;
  studentName: string;
  department: number;
  grade: number;
  parentName: string;
  parentPhone1: string;
  dateOfJoining: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  profilePictureUrl: null;
  role: number;
  department: number;
  gender: number;
}
