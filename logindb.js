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
const signupdb = firebase.database().ref("signupform");
function loginUser(e) {
  e.preventDefault();

  const email = getElementVal("email");
  const password = getElementVal("password");

  signupdb
    .once("value", function (snapshot) {
      let userFound = false;
      snapshot.forEach(function (childSnapshot) {
        const userData = childSnapshot.val();

        if (userData.mail === email && userData.pass === password) {
          userFound = true;
          document.getElementById("loginLink").style.display = "none";
          document.getElementById("signupLink").style.display = "none";
          window.location.href = "/index.html";
        }
      });

      if (!userFound) {
        alert("Invalid email or password. Please try again.");
        document.getElementById("password").value = "";
      }
    })
    .catch(function (error) {
      console.error("Error fetching data: ", error);
      alert(
        "An error occurred while trying to log in. Please try again later."
      );
    });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
  } else {
    console.error("Login form not found");
  }
});
