document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('checkboxError').style.display = 'none';

    // Get form values
    const email = document.querySelector('.t').value;
    const agree = document.querySelector('.check').checked;

    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate checkbox
    if (!agree) {
        document.getElementById('checkboxError').style.display = 'block';
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
         
        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form, e.g., via AJAX
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}