document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav ul");

    // If the page doesn't have a nav or button, do nothing
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("open");

        // Update aria-expanded for accessibility
        const expanded = nav.classList.contains("open");
        toggleBtn.setAttribute("aria-expanded", expanded);
    });
});
// -----------------------------
// FORM VALIDATION (Contact Form)
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!form) return; // In case this JS loads on other pages

    form.addEventListener("submit", (e) => {
        let isValid = true;
        let messages = [];

        const fullName = document.getElementById("full-name");
        const email = document.getElementById("email");
        const inquiryType = document.getElementById("inquiry-type");
        const message = document.getElementById("message");
        const phone = document.getElementById("phone");

        // --- Full Name Validation ---
        if (fullName.value.trim().length < 2) {
            isValid = false;
            messages.push("Full name must be at least 2 characters.");
        }

        // --- Email Validation ---
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            messages.push("Enter a valid email address.");
        }

        // --- Inquiry Type Validation ---
        if (inquiryType.value === "") {
            isValid = false;
            messages.push("Please select an inquiry type.");
        }

        // --- Message Validation ---
        if (message.value.trim().length < 10) {
            isValid = false;
            messages.push("Message must be at least 10 characters.");
        }

        // --- Phone Validation (Optional field) ---
        if (phone.value.trim() !== "") {
            const phonePattern = /^[0-9\-\(\)\s]+$/;
            if (!phonePattern.test(phone.value)) {
                isValid = false;
                messages.push("Phone number contains invalid characters.");
            }
            if (phone.value.trim().length < 10) {
                isValid = false;
                messages.push("Phone number must be at least 10 digits.");
            }
        }

        // --- If Invalid: Prevent Submit + Show Messages ---
        if (!isValid) {
            e.preventDefault();
            alert(messages.join("\n"));
        }
    });
});
