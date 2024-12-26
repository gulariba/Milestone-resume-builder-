const express = require('express');
const app = express();
const port = 3000;

// User data (you can use a database or any other persistent storage)
const resumes = {
  areeba: {
    name: "Areeba Ahmed Khan",
    about: "I bring creativity, passion, and precision to every line of code I write.",
    skills: ["HTML", "CSS", "JavaScript"],
    email: "areeba@example.com",
    phone: "+92 300 1234567"
  }
};

app.get('/:username/resume', (req, res) => {
  const username = req.params.username;
  const resume = resumes[username];

  if (resume) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${resume.name} Resume</title>
      </head>
      <body>
        <header>
          <h1>${resume.name}</h1>
        </header>

        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>${resume.about}</p>
          </section>

          <section id="skills">
            <h2>Skills</h2>
            <ul>
              ${resume.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>Email: ${resume.email}</p>
            <p>Phone: ${resume.phone}</p>
          </section>
        </main>
      </body>
      </html>
    `);
  } else {
    res.status(404).send('Resume not found!');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
