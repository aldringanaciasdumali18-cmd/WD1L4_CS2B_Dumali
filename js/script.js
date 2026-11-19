/* ==========================================================
   WD1-L4 : Student Grades
   Uses arrays + a for loop instead of repeated evaluations
   ========================================================== */

// ----- Arrays used as containers (index 0 of each array belongs to the same student) -----
const studentNames  = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
const studentGrades = [92, 85, 78, 97, 74];


/* ----------------------------------------------------------
   Function: getEquivalent
   Converts a numeric grade into its grade equivalent.
   Returns "Failed" if the grade is below 75.
   ---------------------------------------------------------- */
function getEquivalent(grade) {
  if (grade >= 97) return "1.0";
  else if (grade >= 94) return "1.25";
  else if (grade >= 91) return "1.5";
  else if (grade >= 88) return "1.75";
  else if (grade >= 85) return "2.0";
  else if (grade >= 82) return "2.25";
  else if (grade >= 79) return "2.5";
  else if (grade >= 76) return "2.75";
  else if (grade >= 75) return "3.0";
  else return "Failed";
}


/* ----------------------------------------------------------
   Function: getRemark
   Returns "Passed" for grades of 75 and above, else "Failed".
   ---------------------------------------------------------- */
function getRemark(grade) {
  return grade >= 75 ? "Passed" : "Failed";
}


/* ----------------------------------------------------------
   Function: getAcademicLeader
   Returns the academic leader title, or "-" if none.
   (Thresholds assumed from the sample output: 97 -> 1st Class, 92 -> 2nd Class, 85 -> none.
    Change them if your WD1-P3 used different cut-offs.)
   ---------------------------------------------------------- */
function getAcademicLeader(grade) {
  if (grade >= 95) return "1st Class Academic Leader";
  else if (grade >= 90) return "2nd Class Academic Leader";
  else return "-";
}


/* ----------------------------------------------------------
   Function: displayStudents
   Loops through the arrays and fills the
   "List of Enrolled Students" table.
   ---------------------------------------------------------- */
function displayStudents() {
  let rows = "";

  // Access each student's name and grade using the same index
  for (let i = 0; i < studentNames.length; i++) {
    rows += `
      <tr>
        <td>${studentNames[i]}</td>
        <td>${studentGrades[i]}</td>
      </tr>`;
  }

  document.getElementById("studentList").innerHTML = rows;
}


/* ----------------------------------------------------------
   Function: showGradeEquivalents
   Called by the button. Loops through the arrays, evaluates each
   student's grade using the functions above, and builds the table.
   ---------------------------------------------------------- */
function showGradeEquivalents() {
  // Start of the result table (heading + table header)
  let output = `
    <h2>Grade Equivalents</h2>
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Grade</th>
          <th>Equivalent</th>
          <th>Remark</th>
          <th>Academic Leader</th>
        </tr>
      </thead>
      <tbody>`;

  // One loop evaluates every student (no repeated code)
  for (let i = 0; i < studentNames.length; i++) {
    const grade = studentGrades[i];

    output += `
        <tr>
          <td>${studentNames[i]}</td>
          <td>${grade}</td>
          <td>${getEquivalent(grade)}</td>
          <td>${getRemark(grade)}</td>
          <td>${getAcademicLeader(grade)}</td>
        </tr>`;
  }

  // Close the table
  output += `
      </tbody>
    </table>`;

  // Show the result box with the generated table
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = output;
  resultDiv.style.display = "block";
}


// Build the student list as soon as the page loads
displayStudents();