interface IClassroom {
  id: string;
  teacherId: string;
  teacherName: string;
  numberOfStudents: number;
  subject: string;
  grade: string;
}
interface ISingleClassroomResponse {
  data: IClassroom;
}

interface IGetAllClassroomsResponse {
  data: IClassroom[];
}

interface IClassroomPutData {
  id: string;
  subject: string;
  grade: string;
}
