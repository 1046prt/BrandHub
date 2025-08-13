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
var signupdb = firebase.database().ref("signupform");

document.getElementById("signupForm").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  var name = getElementVal("username");
  var mail = getElementVal("email");
  var pass = getElementVal("password");
  var cpass = getElementVal("confirmPassword");

  savemessages(name, mail, pass, cpass);
}

const savemessages = (name, mail, pass, cpass) => {
  var newcontactform = signupdb.push();
  newcontactform
    .set({
      name: name,
      mail: mail,
      pass: pass,
      cpass: cpass,
    })
    .then(() => {
      document.getElementById("loginLink").style.display = "none";
      document.getElementById("signupLink").style.display = "none";
      alert("Signup successful!");
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error("Error saving message: ", error);
      alert("There was an error during signup. Please try again.");
    });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
