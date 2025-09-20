import React from 'react';

const StudentGroups = () => {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "David", grade: "C" }
  ];

  // Group students by grade using reduce
  const groupedStudents = students.reduce((groups, student) => {
    const grade = student.grade;
    if (!groups[grade]) {
      groups[grade] = [];
    }
    groups[grade].push(student);
    return groups;
  }, {});

  return (
    <div className="student-groups">
      <h3>Students Grouped by Grade</h3>
      {Object.entries(groupedStudents).map(([grade, studentsInGrade]) => (
        <div key={grade} className="grade-group">
          <h4>Grade {grade}</h4>
          <ul>
            {studentsInGrade.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentGroups;
