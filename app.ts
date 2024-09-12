// Get form elements
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    generateResume();
});

function generateResume() {
    // Collect form input
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const gradYear = (document.getElementById("gradYear") as HTMLInputElement).value;

    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const duration = (document.getElementById("duration") as HTMLInputElement).value;
    const jobDesc = (document.getElementById("jobDesc") as HTMLTextAreaElement).value;

    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");

    // Clear previous resume
    resumeContainer.innerHTML = "";

    // Build the resume dynamically
    const resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>${degree} - ${institution} (${gradYear})</p>
        <h3>Work Experience</h3>
        <p>${jobTitle} at ${company}</p>
        <p>Duration: ${duration}</p>
        <p>${jobDesc}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    resumeContainer.innerHTML = resumeHTML;
}
