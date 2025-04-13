const electionsForm = document.getElementById('electionsForm');

electionsForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const selectedVote = electionsForm.querySelector('input[type="radio"]:checked');

    if (selectedVote) {
        const candidate = selectedVote.value;

        // Send vote to Google Sheets
        fetch('https://script.google.com/macros/s/AKfycbwhZRkMQugQ6TUT6tJ8BWD5VE2Bw7xmVy-cQcDWAWq2LhzaZFc_L0C6340nid-M_ZlH/exec', { // Replace with your Google Sheets Web App URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidate: candidate })
        })
        .then(response => {
            if (response.ok) {
                console.log("Vote recorded!");
                electionsForm.reset(); // Reset form after submission
            } else {
                console.error("Error recording vote");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
});