function changeTab(index) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content > div");
  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => (content.style.display = "none"));
  tabs[index].classList.add("active");
  contents[index].style.display = "block";
}

function toggleAccordion(accordionHeader) {
  const accordionContent = accordionHeader.nextElementSibling;
  accordionContent.classList.toggle("active");
  accordionHeader.classList.toggle("active");
  const angleUpIcon = accordionHeader.querySelector(".fa-angle-up");
  const angleDownIcon = accordionHeader.querySelector(".fa-angle-down");
  angleUpIcon.style.display =
    angleUpIcon.style.display === "none" ? "block" : "none";
  angleDownIcon.style.display =
    angleDownIcon.style.display === "none" ? "block" : "none";
}

// Function to show bet slip card
function showBetSlip() {
  var betSlipCard = document.getElementById("bet-slip-card");
  betSlipCard.style.display = "block";
}

// Function to hide bet slip card
function hideBetSlip() {
  var betSlipCard = document.getElementById("bet-slip-card");
  betSlipCard.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".toggle-icon");
  const sidebarItems = document.querySelectorAll(".game-side-panel li");

  toggleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const submenu = this.nextElementSibling;
      const allSubmenus = document.querySelectorAll(".submenu");

      // Hide all submenus
      allSubmenus.forEach((item) => {
        if (item !== submenu) {
          item.classList.remove("active");
          const icon =
            item.previousElementSibling.querySelector(".toggle-icon");
          icon.classList.replace("fa-angle-up", "fa-angle-down");
        }
      });

      submenu.classList.toggle("active");

      if (submenu.classList.contains("active")) {
        this.classList.replace("fa-angle-down", "fa-angle-up");
      } else {
        this.classList.replace("fa-angle-up", "fa-angle-down");
      }
    });
  });

  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebarItems.forEach((i) => i.classList.remove("gpactive"));
      this.classList.add("gpactive");

      // Show submenu if available
      const submenu = this.querySelector(".submenu");
      if (submenu) {
        submenu.classList.toggle("active");
        const icon = this.querySelector(".toggle-icon");
        if (submenu.classList.contains("active")) {
          icon.classList.replace("fa-angle-down", "fa-angle-up");
        } else {
          icon.classList.replace("fa-angle-up", "fa-angle-down");
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const stakeInput = document.getElementById("stake-input");

  // Function to update return value based on the input value
  function updateReturnValue() {
    // Get the current value of the input box
    let currentValue = parseFloat(stakeInput.value.trim());

    // If the input box is empty or the value is not a number, set currentValue to 0
    if (isNaN(currentValue)) {
      currentValue = 0;
    }

    // Calculate the return value as 120% of the input value
    const returnValue = currentValue * 1.2;

    // Update the total return value display accordingly
    document.querySelector(".custom-result-value.betslip-amount").textContent =
      returnValue.toFixed(2);
  }

  // Get all predefined buttons
  const predefinedButtons = document.querySelectorAll(
    ".custom-predefined-button"
  );

  // Add event listener to each predefined button
  predefinedButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the value of the button
      const value = parseFloat(
        button.querySelector("span").textContent.replace("+", "").trim()
      );

      // Get the current value of the input box
      let currentValue = parseFloat(stakeInput.value.trim());

      // If the input box is empty or the value is not a number, set currentValue to 0
      if (isNaN(currentValue)) {
        currentValue = 0;
      }

      // Add the value of the button to the existing value in the input box
      const newValue = currentValue + value;

      // Update the input box with the new value
      stakeInput.value = newValue;

      // Update the return value based on the input value
      updateReturnValue();
    });
  });

  // Add event listener to input box for change events
  stakeInput.addEventListener("input", function () {
    // Update the return value based on the input value
    updateReturnValue();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const betToggle = document.getElementById("bet-toggle");
  const betContainer = document.getElementById("bet-container");
  const customFooter = document.getElementById("customFooter");
  const stakeField = document.getElementById("stakeField");

  betToggle.addEventListener("change", function () {
    if (betToggle.checked) {
      betContainer.style.display = "block";
      customFooter.style.display = "none";
      stakeField.style.display = "none";
    } else {
      betContainer.style.display = "none";
      customFooter.style.display = "block";
      stakeField.style.display = "block";
    }
  });
});

// Function to open popup
function openPopup() {
  document.getElementById("popup-container").style.display = "block";
}

// Function to close popup
function closePopup() {
  document.getElementById("popup-container").style.display = "none";
  //refreshPage();
}

// Function to refresh the page
function refreshPage() {
  location.reload(); // Reload the page
}


// Function to toggle between login and registration form
function toggleForm() {
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var popupHeader = document.querySelector(".popup-header h2");
  var footerText = document.querySelector(".popup-footer p:last-child");

  if (popupHeader.textContent === "Login") {
    loginForm.reset();
    popupHeader.textContent = "Register";
    footerText.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Login</a>";
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  } else if (popupHeader.textContent === "Forgot Password?") {
    toggleForgotPasswordForm();
  } else {
    loginForm.reset();
    popupHeader.textContent = "Login";
    footerText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Register</a>";
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  }
}

function toggleLogForm() {
    var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var popupHeader = document.querySelector(".popup-header h2");
  var footerText = document.querySelector(".popup-footer p:last-child");
  var resetForm = document.getElementById("reset-form");

  loginForm.reset();
    popupHeader.textContent = "Login";
    footerText.style.display = "block";
    footerText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Register</a>";
    registerForm.style.display = "none";
    loginForm.style.display = "block";

    resetForm.style.display = "none";  
}

function toggleRegForm() {
    var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var popupHeader = document.querySelector(".popup-header h2");
  var footerText = document.querySelector(".popup-footer p:last-child");
  var resetForm = document.getElementById("reset-form");

    loginForm.reset();
    popupHeader.textContent = "Register";
    footerText.style.display = "block";
    footerText.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Login</a>";
    loginForm.style.display = "none";
    registerForm.style.display = "block";

    resetForm.style.display = "none";    
}

// Function to handle forgot password
function forgotPassword() {
  var resetForm = document.getElementById("reset-form");
  var popupHeader = document.querySelector(".popup-header h2");
  var footerText = document.querySelector(".popup-footer p:first-child");

  //resetForm.reset();
  popupHeader.textContent = "Forgot Password?";
  footerText.style.display = "none";
  toggleForgotPasswordForm();
}

// Function to toggle between login and reset password forms
function toggleForgotPasswordForm() {
  var loginForm = document.getElementById("login-form");
  var resetForm = document.getElementById("reset-form");
  var popupHeader = document.querySelector(".popup-header h2");

  if (popupHeader.textContent === "Forgot Password?") {
    loginForm.style.display = "none";
    resetForm.style.display = "block";
  } else {
    loginForm.style.display = "block";
    resetForm.style.display = "none";
  }
}

// Function to toggle password visibility for login form
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".toggle-password i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Function to toggle password visibility for registration form
function toggleNewPasswordVisibility() {
  var passwordInput = document.getElementById("new-password");
  var icon = document.querySelector(".toggle-password i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}