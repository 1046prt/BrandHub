// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAI0DFmypBB-F-1y9ikpPXewjgH1OKB8EI",
    authDomain: "brand-hub-144ae.firebaseapp.com",
    databaseURL: "https://brand-hub-144ae-default-rtdb.firebaseio.com",
    projectId: "brand-hub-144ae",
    storageBucket: "brand-hub-144ae.firebasestorage.app",
    messagingSenderId: "814169373829",
    appId: "1:814169373829:web:d932c481e077edf0dffdec",
    measurementId: "G-7K74KYTYHF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const signupdb = firebase.database().ref("signupform");

// Function to handle user login
function loginUser (e) {
    e.preventDefault();

    const email = getElementVal("email");
    const password = getElementVal("password");

    console.log("Attempting to log in with:", email, password); // Debugging log

    // Fetch data from Firebase
    signupdb.once('value', function(snapshot) {
        let userFound = false;
        snapshot.forEach(function(childSnapshot) {
            const userData = childSnapshot.val();
            console.log("Checking user:", userData); // Debugging log

            // Check if email and password match
            if (userData.mail === email && userData.pass === password) {
                userFound = true;
                // User found, handle successful login
                alert("Login successful!");

                // Hide the login and signup links
                document.getElementById('loginLink').style.display = 'none';
                document.getElementById('signupLink').style.display = 'none';

                // Redirect to index.html
                window.location.href = "index.html"; 
            }
        });

        // If user is not found after checking all entries
        if (!userFound) {
            // User not found, handle login failure
            alert("Invalid email or password. Please try again.");
            // Optionally, you can clear the password field for security
            document.getElementById("password").value = '';
        }
    }).catch(function(error) {
        console.error("Error fetching data: ", error);
        alert("An error occurred while trying to log in. Please try again later.");
    });
}

// Utility function to get element value
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', loginUser );
    } else {
        console.error("Login form not found");
    }
});