const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

let students = [];

studentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const grade = document.getElementById('grade').value.trim();

  if (name && roll && grade) {
    const student = { name, roll, grade };
    students.push(student);
    renderTable();
    studentForm.reset();
  }
});

function renderTable() {
  studentTable.innerHTML = '';

  students.forEach((student, index) => {
    const row = studentTable.insertRow();

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.grade}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    `;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}
