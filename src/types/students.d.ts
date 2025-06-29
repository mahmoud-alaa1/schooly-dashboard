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
  email: string;
  department: number;
  phoneNumber: string;
  dateOfBirth: string;
  gender: number;
  grade: number;
  role: number;
  parentName: string;
  parentPhone1: string;
  parentPhone2: string;
  dateOfJoining: string;
  department: number;
  parentJob: string;
  address: string;
  parentRelation: number;
}

declare interface IStudentPutData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl?: string;
  parent: {
    parentName: string;
    relation: number;
    job: string;
    phone1: string;
    phone2: string;
  };
  address: string;
  dateOfJoining: string;
  department: number;
  grade: number;
  gender: number;
}
