// by Rocco Ali 218008847 and Daniel Gherman 217284506
let isValid = false;
let studentInfo;
let studentFname, studentLname, studentID, studentPhoneNum, studentEmail;

// Splits string and counts that there are 5 elements
function checkElementCount() {
    let elementCount = studentInfo.split(" ").length;
    if (elementCount != 5) {
        return false;
    } else {
        return true;
    }
}

// Check that first name and last name are valid
function checkName() {
    // Should start with capital, and continue as lowercase
    let nameRegex = /^[A-Z][a-z]*$/;
    if (nameRegex.test(studentFname) == false || nameRegex.test(studentLname) == false) {
        return false;
    } else {
        return true;
    }
}

// Student ID should be 9 numbers
function checkID() {
    if (isNaN(studentID) == true || studentID.length != 9) {
        return false;
    } else {
        return true;
    }
}

// Check that phone number is valid
function checkPhoneNumber() {
    // 3 digits - 3 digits - 4 digits
    let numberRegex = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    if (numberRegex.test(studentPhoneNum) == false) {
        return false;
    } else {
        return true;
    }
}

// Check that email is valid
function checkEmail() {
    let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (emailRegex.test(studentEmail) == false) {
        return false;
    } else {
        return true;
    }
}

// Writes student information to DOM
function printString() {
    document.write("<p>First name: " + studentFname + "</p>");
    document.write("<p>Last name: " + studentLname + "</p>");
    document.write("<p>Student ID: " + studentID + "</p>");
    document.write("<p>Phone number: " + studentPhoneNum + "</p>");
    document.write("<p>Email: " + studentEmail + "</p>");
}

// Loops until string is valid
while (isValid == false) {
    // Prompt and store user info
    studentInfo = prompt(
        "Please enter your: \n1) First Name \n2) Last Name \n3) Student ID \n4) Phone number \n5) Email" +
        "\n\nSeperate each input with a space",
        "Farhad Hosseinkhani 121212121 343-434-3434 farhad@asd.ca"
    );

    // Split each element and store in respected variables
    let splitInfo = studentInfo.split(" ");
    studentFname = splitInfo[0];
    studentLname = splitInfo[1];
    studentID = splitInfo[2];
    studentPhoneNum = splitInfo[3];
    studentEmail = splitInfo[4];

    // Call each function to check if string is valid, prints if valid, loop again if not valid
    if (checkElementCount() && checkName() && checkID() && checkPhoneNumber() && checkEmail()) {
        isValid = true;
        printString();
    } else {
        isValid = false;
    }
}
