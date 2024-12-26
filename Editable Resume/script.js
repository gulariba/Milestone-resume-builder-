const sections = document.querySelectorAll('.resume-section');

sections.forEach(section => {
  section.addEventListener('blur', () => {
    const content = section.innerHTML; // Capture edited content
    console.log('Updated Content:', content); // You can send it to a server or save it locally
  });
});
