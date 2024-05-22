// Function to show an alert
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.appendChild(document.createTextNode(message));

    const container = document.querySelector('body');
    const form = document.querySelector('form');

    container.insertBefore(alertDiv, form);

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Function to send email
function sendMail() {
    (function() {
        emailjs.init("8INqdlMzFgn4sAeOB");
    })();

    var nama = document.querySelector("#sendername").value;
    var email = document.querySelector("#to").value;
    var message = document.querySelector("#message").value;

    var params = {
        nama: nama,
        email: email,
        message: message
    };

    var serviceID = "service_ptilmbd";
    var templateID = "template_oqgvem6";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            showAlert('Email sent successfully', 'success');
        })
        .catch(err => {
            console.error('Failed to send email. Error: ', err);
            showAlert("Failed to send email. Error: " + err.text, 'error');
        });
}
