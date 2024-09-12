// Get form elements
var form = document.getElementById("resumeForm");
var resumeContainer = document.getElementById("resumeContainer");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    generateResume();
});
function generateResume() {
    // Collect form input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var gradYear = document.getElementById("gradYear").value;
    var company = document.getElementById("company").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var duration = document.getElementById("duration").value;
    var jobDesc = document.getElementById("jobDesc").value;
    var skills = document.getElementById("skills").value.split(",");
    // Clear previous resume
    resumeContainer.innerHTML = "";
    // Build the resume dynamically
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(degree, " - ").concat(institution, " (").concat(gradYear, ")</p>\n        <h3>Work Experience</h3>\n        <p>").concat(jobTitle, " at ").concat(company, "</p>\n        <p>Duration: ").concat(duration, "</p>\n        <p>").concat(jobDesc, "</p>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    resumeContainer.innerHTML = resumeHTML;
}
