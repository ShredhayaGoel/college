const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTable");
const searchInput = document.getElementById("search");
const submitBtn = document.getElementById("submitBtn");

let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

// Display Students
function displayStudents(data = students) {
    tableBody.innerHTML = "";

    data.forEach((student, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.course}</td>
            <td>${student.gender}</td>
            <td>${student.dob}</td>
            <td>${student.address}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

// Save to Local Storage
function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Clear Error Messages
function clearErrors() {
    document.querySelectorAll(".error").forEach(error => {
        error.innerText = "";
    });
}

// Validation
function validate() {

    clearErrors();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Name
    if (!/^[A-Za-z ]{3,}$/.test(name)) {
        document.getElementById("nameError").innerText = "Enter a valid name.";
        valid = false;
    }

    // Roll
    if (roll === "") {
        document.getElementById("rollError").innerText = "Roll Number is required.";
        valid = false;
    }

    // Duplicate Roll
    if (editIndex === -1) {
        if (students.some(student => student.roll === roll)) {
            document.getElementById("rollError").innerText = "Roll Number already exists.";
            valid = false;
        }
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid Email.";
        valid = false;
    }

    // Phone
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter 10-digit phone number.";
        valid = false;
    }

    // Course
    if (course === "") {
        document.getElementById("courseError").innerText = "Select a course.";
        valid = false;
    }

    // Gender
    if (!gender) {
        document.getElementById("genderError").innerText = "Select gender.";
        valid = false;
    }

    // DOB
    if (dob === "") {
        document.getElementById("dobError").innerText = "Select Date of Birth.";
        valid = false;
    } else {
        let age = new Date().getFullYear() - new Date(dob).getFullYear();

        if (age < 16) {
            document.getElementById("dobError").innerText = "Age must be at least 16.";
            valid = false;
        }
    }

    // Address
    if (address.length < 10) {
        document.getElementById("addressError").innerText = "Address must contain at least 10 characters.";
        valid = false;
    }

    return valid;
}

// Submit Form
form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!validate()) return;

    const student = {

        name: document.getElementById("name").value.trim(),
        roll: document.getElementById("roll").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        course: document.getElementById("course").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        dob: document.getElementById("dob").value,
        address: document.getElementById("address").value.trim()

    };

    if (editIndex === -1) {

        students.push(student);

    } else {

        students[editIndex] = student;
        editIndex = -1;
        submitBtn.innerText = "Register Student";

    }

    saveData();
    displayStudents();

    form.reset();
    clearErrors();

});

// Edit Student
function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("roll").value = student.roll;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("course").value = student.course;
    document.getElementById("dob").value = student.dob;
    document.getElementById("address").value = student.address;

    document.querySelectorAll('input[name="gender"]').forEach(radio => {

        radio.checked = radio.value === student.gender;

    });

    editIndex = index;

    submitBtn.innerText = "Update Student";
}

// Delete Student
function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        saveData();
        displayStudents();

    }

}

// Search Student
searchInput.addEventListener("keyup", function () {

    let keyword = this.value.toLowerCase();

    let filtered = students.filter(student =>

        student.name.toLowerCase().includes(keyword) ||
        student.roll.toLowerCase().includes(keyword)

    );

    displayStudents(filtered);

});

// Load Students
displayStudents();