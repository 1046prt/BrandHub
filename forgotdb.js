const firebaseConfig = {
  authDomain: "brand-hub-144ae.firebaseapp.com",
  databaseURL: "https://brand-hub-144ae-default-rtdb.firebaseio.com",
  projectId: "brand-hub-144ae",
  storageBucket: "brand-hub-144ae.firebasestorage.app",
  messagingSenderId: "814169373829",
  appId: "1:814169373829:web:d932c481e077edf0dffdec",
  measurementId: "G-7K74KYTYHF",
};
firebase.initializeApp(firebaseConfig);
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    const auth = firebase.auth();
    logPasswordResetAttempt(email);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        showMessage(
          `Password reset email sent to ${email}. Please check your inbox.`,
          "success"
        );

        document.getElementById("forgotPasswordForm").reset();
        setTimeout(() => {
          window.location.href = "/login.html";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);

        if (error.code === "auth/user-not-found") {
          showMessage("No account exists with this email address.", "error");
        } else {
          showMessage(
            "Failed to send password reset email. Please try again later.",
            "error"
          );
        }
      });
  });

// Function to log password reset attempts in the database
function logPasswordResetAttempt(email) {
  const resetLogsRef = firebase.database().ref("passwordResetLogs");
  const newLogEntry = resetLogsRef.push();
  newLogEntry
    .set({
      email: email,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      userIP: getUserIP(),
      userAgent: navigator.userAgent,
    })
    .catch((error) => {
      console.error("Error logging password reset attempt:", error);
    });
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showMessage(message, type) {
  let messageContainer = document.querySelector(".message-container");
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    messageContainer.className = "message-container";
    messageContainer.style.padding = "10px";
    messageContainer.style.margin = "10px 0";
    messageContainer.style.borderRadius = "5px";
    messageContainer.style.textAlign = "center";
    const form = document.getElementById("forgotPasswordForm");
    form.parentNode.insertBefore(messageContainer, form);
  }

  messageContainer.textContent = message;
  if (type === "success") {
    messageContainer.style.backgroundColor = "rgba(76, 175, 80, 0.3)";
    messageContainer.style.color = "#1a2a40";
    messageContainer.style.border = "1px solid #4CAF50";
  } else if (type === "error") {
    messageContainer.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
    messageContainer.style.color = "#1a2a40";
    messageContainer.style.border = "1px solid #F44336";
  }
  
  setTimeout(() => {
    messageContainer.remove();
  }, 5000);
}

function getUserIP() {
  return "IP logging requires server-side implementation";
}
