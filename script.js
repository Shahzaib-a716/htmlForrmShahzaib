const form = document.getElementById("registrationForm");
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        form.submit();
      }
    });

    function validateForm() {
      let isValid = true;
      const fullName = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (fullName === "") {
        showError("fullName", "Full name is required.");
        isValid = false;
      } else {
        hideError("fullName");
      }

      if (email === "") {
        showError("email", "Email is required.");
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError("email", "Invalid email format.");
        isValid = false;
      } else {
        hideError("email");
      }

      if (password === "") {
        showError("password", "Password is required.");
        isValid = false;
      } else {
        hideError("password");
      }

      if (confirmPassword === "") {
        showError("confirmPassword", "Please confirm your password.");
        isValid = false;
      } else if (password !== confirmPassword) {
        showError("confirmPassword", "Passwords do not match.");
        isValid = false;
      } else {
        hideError("confirmPassword");
      }

      return isValid;
    }

    function showError(inputName, errorMessage) {
      const errorElement = document.getElementById(inputName + "Error");
      errorElement.textContent = errorMessage;
    }

    function hideError(inputName) {
      const errorElement = document.getElementById(inputName + "Error");
      errorElement.textContent = "";
    }

    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }