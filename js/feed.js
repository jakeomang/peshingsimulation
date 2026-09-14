// ========================================
// TELEGRAM DEMO - FEED PAGE
// ========================================

// Get the logged-in demo user
const storedEmail = sessionStorage.getItem("demoUser");

// Get elements from feed.html
const userName = document.getElementById("userName");
const logoutButton = document.getElementById("logoutButton");
const createPostButton = document.getElementById("createPostButton");


// ========================================
// CHECK LOGIN SESSION
// ========================================

// If there is no logged-in demo user,
// send the visitor back to the login page.
if (!storedEmail) {
    window.location.href = "index.html";
} else {
    // Display demo email in the sidebar
    if (userName) {
        userName.textContent = storedEmail;
    }
}


// ========================================
// LOGOUT
// ========================================

if (logoutButton) {

    logoutButton.addEventListener("click", function () {

        const confirmLogout = confirm(
            "Are you sure you want to log out?"
        );

        if (confirmLogout) {

            // Remove login session
            sessionStorage.removeItem("demoUser");

            // Return to login page
            window.location.href = "index.html";
        }

    });

}


// ========================================
// CREATE POST DEMO
// ========================================

if (createPostButton) {

    createPostButton.addEventListener("click", function () {

        alert(
            "Post creation is disabled in this school awareness simulation."
        );

    });

}