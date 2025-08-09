document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Check if required fields are filled
    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission (replace with actual backend logic)
    console.log("Form submitted");
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Message:", message.value);

    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
  });
});
