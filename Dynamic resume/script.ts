const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeSection = document.getElementById("resume-section")!;
const resumeContent = document.getElementById("resume-content")!;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Capture user input
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const work = (document.getElementById("work") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");

  // Generate dynamic resume content
  const resumeHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <h4>Education</h4>
    <p>${education}</p>
    <h4>Work Experience</h4>
    <p>${work}</p>
    <h4>Skills</h4>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
  `;

  // Display the resume
  resumeContent.innerHTML = resumeHTML;
  resumeSection.classList.remove("hidden");
});
