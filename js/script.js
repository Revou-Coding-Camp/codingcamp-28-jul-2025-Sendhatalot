document.addEventListener("DOMContentLoaded", () => {
  const username = prompt("Please enter your name:");
  const nameToShow = username || "Guest";
  
  document.getElementById("username").textContent = nameToShow;
  document.getElementById("footerName").textContent = nameToShow;

  const form = document.getElementById("contactForm");
  const resultDiv = document.getElementById("formResult");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("messageText").value;

    resultDiv.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Birth Date:</strong> ${birthdate}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    form.reset();
  });
});
