document.addEventListener("DOMContentLoaded", function () {
    // === Common Element References ===
    const registerLink = document.querySelector(".register-link"); // "Sign up" on login page
    const signInLink = document.querySelector(".sign-in-link");     // "Sign in Now!" on signup page
    const signupForm = document.querySelector(".signup-form");      // Signup form
    const logoutBtn = document.getElementById("logout-btn");        // Logout button on home page

    // === NAVIGATION: Login -> Signup ===
    if (registerLink) {
        registerLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "signup.html";
        });
    }

    // === NAVIGATION: Signup -> Login ===
    if (signInLink) {
        signInLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }

    // === SIGNUP VALIDATION & REDIRECT ===
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Capture input values
            const firstName = document.getElementById("first-name").value.trim();
            const lastName = document.getElementById("last-name").value.trim();
            const email = document.getElementById("email-address").value.trim();
            const phone = document.getElementById("phone-number").value.trim();
            const password = document.getElementById("create-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            // Basic validation
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match! Please recheck.");
                return;
            }

            // Simulate user creation and redirect
            alert(`Account created successfully! Welcome, ${firstName} ${lastName}.`);
            window.location.href = "home.html";
        });
    }

    // === LOGIN FORM FUNCTIONALITY (Optional enhancement later) ===
    const loginForm = document.querySelector(".login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // For now, skip authentication — redirect to home
            alert("Login successful! Redirecting to Home Page...");
            window.location.href = "home.html";
        });
    }

    // === LOGOUT FUNCTIONALITY ===
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                alert("You have been logged out successfully.");
                window.location.href = "index.html";
            }
        });
    }
});

