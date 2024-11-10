document.getElementById('petitionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to store the petition data
    const petitionData = {
        name: name,
        email: email,
        message: message
    };

    // Retrieve existing signatures from Local Storage
    let signatures = JSON.parse(localStorage.getItem('signatures')) || [];
    signatures.push(petitionData); // Add new signature to the array

    // Save updated signatures back to Local Storage
    localStorage.setItem('signatures', JSON.stringify(signatures));

    // Display a response message
    document.getElementById('responseMessage').innerText = 'Thank you for signing the petition!';

    // Optionally, reset the form
    this.reset();
});
    function displaySignatures() {
    const signatures = JSON.parse(localStorage.getItem('signatures')) || [];
    const signatureList = document.createElement('ul');

    signatures.forEach(signature => {
        const listItem = document.createElement('li');
        listItem.textContent = `${signature.name} (${signature.email}): ${signature.message}`;
        signatureList.appendChild(listItem);
    });

    document.body.appendChild(signatureList);
}

// Call the function to display signatures when the page loads
window.onload = displaySignatures;
