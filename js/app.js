const demoForm = document.getElementById("demoForm");

demoForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter the demo email and demo password.");
        return;
    }

    const submitButton = demoForm.querySelector("button");

    submitButton.disabled = true;
    submitButton.textContent = "Logging in...";

    try {
        const response = await fetch("save_attempt.php", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email
            })
        });

        const result = await response.json();

        if (result.success) {
            sessionStorage.setItem("demoUser", email);

            window.location.href = "feed.html";
        } else {
            alert(result.message);

            submitButton.disabled = false;
            submitButton.textContent = "Log In";
        }
    } catch (error) {
        console.error(error);

        alert("Unable to connect to the simulation server.");

        submitButton.disabled = false;
        submitButton.textContent = "Log In";
    }
});