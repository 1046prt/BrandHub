// Initialize Firebase
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
const db = firebase.database();

// Function to load all brands from the database
function loadBrands() {
  const brandGrid = document.getElementById("brandGrid");
  brandGrid.innerHTML = '<p class="loading">Loading brands...</p>';

  db.ref("brands")
    .once("value")
    .then((snapshot) => {
      if (!snapshot.exists()) {
        brandGrid.innerHTML =
          '<p class="no-results">No brands found. Add your first brand!</p>';
        return;
      }

      // Clear loading message
      brandGrid.innerHTML = "";

      // Load categories for filter
      const categories = new Set();
      const brandsData = snapshot.val();

      // Loop through all brands
      Object.keys(brandsData).forEach((key) => {
        const brand = brandsData[key];
        brand.id = key; // Add the key as id to the brand object

        // Add category to the set
        if (brand.category) {
          categories.add(brand.category);
        }

        // Create brand card
        createBrandCard(brand);
      });

      // Update category filter dropdown
      updateCategoryFilter(categories);
    })
    .catch((error) => {
      console.error("Error loading brands: ", error);
      brandGrid.innerHTML =
        '<p class="error">Error loading brands. Please try again later.</p>';
    });
}

// Function to add a new brand
function addBrand() {
  const brandData = {
    name: document.getElementById("brandName").value,
    category: document.getElementById("brandCategory").value,
    description: document.getElementById("brandDescription").value,
  };

  // Validate brand data
  if (!brandData.name || !brandData.category) {
    alert("Please fill in all required fields.");
    return;
  }

  // Generate a new unique key in the brands node
  const newBrandRef = db.ref("brands").push();

  // Set data at the new reference
  newBrandRef
    .set(brandData)
    .then(() => {
      alert("Brand added successfully!");
      document.getElementById("addBrandForm").reset();
      document.getElementById("addBrandModal").style.display = "none";
      loadBrands(); // Reload brands to show the new one
    })
    .catch((error) => {
      console.error("Error adding brand: ", error);
      alert("Error adding brand. Please try again.");
    });
}

// Function to update a brand
function updateBrand(brandId) {
  const brandData = {
    name: document.getElementById("brandName").value,
    category: document.getElementById("brandCategory").value,
    description: document.getElementById("brandDescription").value,
  };

  // Validate brand data
  if (!brandData.name || !brandData.category) {
    alert("Please fill in all required fields.");
    return;
  }

  db.ref(`brands/${brandId}`)
    .update(brandData)
    .then(() => {
      alert("Brand updated successfully!");
      document.getElementById("addBrandForm").reset();
      document.getElementById("addBrandModal").style.display = "none";
      loadBrands(); // Reload brands
    })
    .catch((error) => {
      console.error("Error updating brand: ", error);
      alert("Error updating brand. Please try again.");
    });
}

// Example of how to call addBrand when a form is submitted
document
  .getElementById("addBrandForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const editId = document.getElementById("addBrandForm").dataset.editId; // Get edit ID if exists
    if (editId) {
      updateBrand(editId); // Call update if edit ID exists
    } else {
      addBrand(); // Call addBrand if no edit ID
    }
  });

// Function to set up the form for editing a brand
function editBrand(brand) {
  document.getElementById("brandName").value = brand.name;
  document.getElementById("brandCategory").value = brand.category;
  document.getElementById("brandDescription").value = brand.description;
  document.getElementById("addBrandForm").dataset.editId = brand.id; // Store the brand ID for updating
  document.getElementById("addBrandModal").style.display = "block"; // Show the modal
}

// Function to delete a brand
function deleteBrand(brandId) {
  db.ref(`brands/${brandId}`)
    .remove()
    .then(() => {
      alert("Brand deleted successfully!");
      loadBrands(); // Reload brands
    })
    .catch((error) => {
      console.error("Error deleting brand: ", error);
      alert("Error deleting brand. Please try again.");
    });
}

// Function to handle user signup
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      alert("Signup successful!");
      hideLoginSignupLinks(); // Hide login and signup links
      window.location.href = "index.html"; // Redirect to home page
    })
    .catch((error) => {
      console.error("Error during signup: ", error);
      alert("Error during signup. Please try again.");
    });
}

// Function to handle user login
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      alert("Login successful!");
      hideLoginSignupLinks(); // Hide login and signup links
      window.location.href = "index.html"; // Redirect to home page
    })
    .catch((error) => {
      console.error("Error during login: ", error);
      alert("Error during login. Please try again.");
    });
}

// Function to hide login and signup links
function hideLoginSignupLinks() {
  document.getElementById("loginLink").style.display = "none";
  document.getElementById("signupLink").style.display = "none";
}

// Load brands on page load
loadBrands();
