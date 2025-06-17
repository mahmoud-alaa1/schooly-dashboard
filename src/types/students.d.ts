declare interface IStudentPostData {
  studentName: string;
  studentEmail: string;
  password: string;
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
