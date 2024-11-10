// Initialize Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyD4betLzlYUpPpuKWaU4I9aP1Btt0JYMfw",
  authDomain: "my-backend-petition.firebaseapp.com",
  projectId: "my-backend-petition",
  storageBucket: "my-backend-petition.firebasestorage.app",
  messagingSenderId: "846261613441",
  appId: "1:846261613441:web:fcd1ddd5b74c0156a9ae80",
  measurementId: "G-QYBTGJYNNB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Modify the form submission code
document.getElementById('petitionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save to Firestore
    db.collection("signatures").add({
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        document.getElementById('responseMessage').innerText = 'Thank you for signing the petition!';
        this.reset();
        displaySignatures();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});

// Function to display signatures from Firestore
function displaySignatures() {
    const signatureList = document.getElementById('signatureList');
    signatureList.innerHTML = '';

    db.collection("signatures").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const signature = doc.data();
            const listItem = document.createElement('li');
            listItem.textContent = `${signature.name} (${signature.email}): ${signature.message}`;
            signatureList.appendChild(listItem);
        });
    });
    }
