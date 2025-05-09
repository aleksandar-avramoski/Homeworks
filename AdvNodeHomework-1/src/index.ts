// Task 1
interface Student {
  id: number;
  name: string;
  age: number;
  grades: number[];
}

function calculateAverageGrade(students: Student[]): number {
  let totalSumOfGrades = 0;
  let totalCountOfGrades = 0;

  for (let student of students) {
    for (let grade of student.grades) {
      totalSumOfGrades += grade;
      totalCountOfGrades++;
    }
  }

  return totalSumOfGrades / totalCountOfGrades;
}

let students: Student[] = [
  { id: 1, name: "Aleksandar", age: 20, grades: [7, 7, 8] },
  { id: 2, name: "Alex", age: 21, grades: [8, 9, 7] },
  { id: 3, name: "Jane", age: 22, grades: [7, 10, 8] },
];

let average = calculateAverageGrade(students);
console.log("Average grade:" + (Math.round(average * 100) / 100).toFixed(2));

// Task 2
enum GradeLevel {
  FRESHMAN,
  SOPHOMORE,
  JUNIOR,
  SENIOR,
}

function getGradeLevel(studentAge: number): GradeLevel {
  if (studentAge <= 18) {
    return GradeLevel.FRESHMAN;
  } else if (studentAge === 19) {
    return GradeLevel.SOPHOMORE;
  } else if (studentAge === 20) {
    return GradeLevel.JUNIOR;
  } else {
    return GradeLevel.SENIOR;
  }
}

let gradeLevel = getGradeLevel(20) as GradeLevel;
console.log("Grade level:" + GradeLevel[gradeLevel]);

// Task 3
interface Course {
  id: number;
  name: string;
  students: Student[];
  instructor: string;
  maxStudents: number;
}

class CourseManager {
  private courses: Course[] = [];

  public addNewCourse(course: Course): void {
    this.courses.push(course);
  }

  public removeCourseById(courseId: number): void {
    this.courses = this.courses.filter((course) => course.id !== courseId);
  }

  public getCourseById(courseId: number): Course {
    const course = this.courses.find((course) => course.id === courseId);
    if (!course) {
      throw new Error(`Course with ID ${courseId} not  found`);
    }
    return course;
  }

  public getAllCourses(): Course[] {
    return [...this.courses];
  }
}

let manager = new CourseManager();

manager.addNewCourse({
  id: 1,
  name: "Math",
  students: [
    {
      id: 1,
      name: "Aleksandar",
      grades: [7, 7, 8],
      age: 20,
    },
  ],
  maxStudents: 10,
  instructor: "Jane",
});

manager.addNewCourse({
  id: 2,
  name: "Physics",
  students: [],
  maxStudents: 7,
  instructor: "Phill",
});

manager.addNewCourse({
  id: 3,
  name: "History",
  students: [],
  maxStudents: 9,
  instructor: "Eric",
});

console.log(manager.getCourseById(3));

manager.removeCourseById(1);

console.log(manager.getAllCourses());
