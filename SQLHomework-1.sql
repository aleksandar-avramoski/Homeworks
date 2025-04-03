-- Student Table
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    dateOfBirth DATE NOT NULL,
    enrolledDate DATE NOT NULL,
    gender VARCHAR(6) NOT NULL,
    nationalIdNumber INTEGER NOT NULL, 
    studentCardNumber INTEGER NOT NULL
);

INSERT INTO student (firstName, lastName, dateOfBirth, enrolledDate, gender, nationalIdNumber, studentCardNumber) 
VALUES ('Aleksandar', 'Avramoski', '2004-08-03', '2024-10-14', 'Male', 135115642, 100);

SELECT * FROM student;

-- Teacher Table
CREATE TABLE teacher (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    dateOfBirth DATE NOT NULL,
    academicRank VARCHAR(30) NOT NULL,
	hireDate DATE NOT NULL
);

INSERT INTO teacher (firstName, lastName, dateOfBirth, academicRank, hireDate) 
VALUES ('John', 'Doe', '2000-02-07', 'Professor', '2010-05-28');

SELECT * FROM teacher;

-- Grade Details Table
CREATE TABLE gradeDetails (
    id SERIAL PRIMARY KEY,
    gradeId INTEGER NOT NULL,
	achievementTypeId INTEGER NOT NULL,
	achievementPoints DECIMAL(5,2) NOT NULL,
	achievementMaxPoints DECIMAL(5,2) NOT NULL,
	achievementDate DATE NOT NULL
);

INSERT INTO gradeDetails (gradeId, achievementTypeId, achievementPoints, achievementMaxPoints, achievementDate) 
VALUES (2, 3, 74.5, 100, '2024-04-03');

SELECT * FROM gradeDetails;

-- Course Table
CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
	credit INTEGER NOT NULL,
	academicYear VARCHAR(9) NOT NULL,
	semester VARCHAR(10) NOT NULL 
);

INSERT INTO course (name, credit, academicYear, semester) 
VALUES ('Qinshift', 50, '2024-2025', 'Semester 2');

SELECT * FROM course;

-- Grade Table
CREATE TABLE grade (
    id SERIAL PRIMARY KEY,
   	studentId INTEGER NOT NULL,
	courseId INTEGER NOT NULL,
	teacherId INTEGER NOT NULL,
	grade INTEGER NOT NULL,
	comment TEXT NOT NULL,
	createdDate DATE NOT NULL
);

INSERT INTO grade (studentId, courseId, teacherId, grade, comment, createdDate) 
VALUES (1004, 5242, 4912, 4, 'No comment', '2025-04-03');

SELECT * FROM grade;

-- Achievement Type Table
CREATE TABLE achievementType (
    id SERIAL PRIMARY KEY,
   	name VARCHAR(50) NOT NULL,
	description TEXT NOT NULL,
	participationRate DECIMAL(5,2) NOT NULL
);

INSERT INTO achievementType (name, description, participationRate) 
VALUES ('Academic Excellence', 'Good academic performance', 90.2);

SELECT * FROM achievementType;