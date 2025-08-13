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
const db = firebase.database();

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

      brandGrid.innerHTML = "";

      const categories = new Set();
      const brandsData = snapshot.val();

      Object.keys(brandsData).forEach((key) => {
        const brand = brandsData[key];
        brand.id = key;

        if (brand.category) {
          categories.add(brand.category);
        }

        createBrandCard(brand);
      });
      updateCategoryFilter(categories);
    })
    .catch((error) => {
      console.error("Error loading brands: ", error);
      brandGrid.innerHTML =
        '<p class="error">Error loading brands. Please try again later.</p>';
    });
}

function addBrand() {
  const brandData = {
    name: document.getElementById("brandName").value,
    category: document.getElementById("brandCategory").value,
    description: document.getElementById("brandDescription").value,
  };

  if (!brandData.name || !brandData.category) {
    alert("Please fill in all required fields.");
    return;
  }

  const newBrandRef = db.ref("brands").push();

  newBrandRef
    .set(brandData)
    .then(() => {
      alert("Brand added successfully!");
      document.getElementById("addBrandForm").reset();
      document.getElementById("addBrandModal").style.display = "none";
      loadBrands();
    })
    .catch((error) => {
      console.error("Error adding brand: ", error);
      alert("Error adding brand. Please try again.");
    });
}

function updateBrand(brandId) {
  const brandData = {
    name: document.getElementById("brandName").value,
    category: document.getElementById("brandCategory").value,
    description: document.getElementById("brandDescription").value,
  };

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
      loadBrands();
    })
    .catch((error) => {
      console.error("Error updating brand: ", error);
      alert("Error updating brand. Please try again.");
    });
}

document
  .getElementById("addBrandForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const editId = document.getElementById("addBrandForm").dataset.editId;
    if (editId) {
      updateBrand(editId);
    } else {
      addBrand();
    }
  });

// Function to set up the form for editing a brand
function editBrand(brand) {
  document.getElementById("brandName").value = brand.name;
  document.getElementById("brandCategory").value = brand.category;
  document.getElementById("brandDescription").value = brand.description;
  document.getElementById("addBrandForm").dataset.editId = brand.id;
  document.getElementById("addBrandModal").style.display = "block";
}

function deleteBrand(brandId) {
  db.ref(`brands/${brandId}`)
    .remove()
    .then(() => {
      alert("Brand deleted successfully!");
      loadBrands();
    })
    .catch((error) => {
      console.error("Error deleting brand: ", error);
      alert("Error deleting brand. Please try again.");
    });
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      hideLoginSignupLinks();
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error during signup: ", error);
      alert("Error during signup. Please try again.");
    });
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      hideLoginSignupLinks();
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error during login: ", error);
      alert("Error during login. Please try again.");
    });
}

function hideLoginSignupLinks() {
  document.getElementById("loginLink").style.display = "none";
  document.getElementById("signupLink").style.display = "none";
}
loadBrands();
