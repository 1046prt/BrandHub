const firebaseConfig = {
  authDomain: "brand-hub-144ae.firebaseapp.com",
  databaseURL: "https://brand-hub-144ae-default-rtdb.firebaseio.com",
  projectId: "brand-hub-144ae",
  storageBucket: "brand-hub-144ae.firebasestorage.app",
  messagingSenderId: "814169373829",
  appId: "1:814169373829:web:d932c481e077edf0dffdec",
  measurementId: "G-7K74KYTYHF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactdb = firebase.database().ref("contactform");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var message = getElementVal("message");

  saveMessages(name, email, phone, message);
}

const saveMessages = (name, email, phone, message) => {
  var newContactForm = contactdb.push();
  newContactForm
    .set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then(() => {
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error("Error sending message: ", error);
      alert("There was an error sending your message. Please try again.");
    });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
