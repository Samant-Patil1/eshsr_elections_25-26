electionsForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const selectedVote = electionsForm.querySelector('input[type="radio"]:checked');

    if (selectedVote) {
        const candidate = selectedVote.value;

        // Send vote to Google Sheets
        fetch('https://script.google.com/macros/s/AKfycbzP86JpURGFvWZ3cZKyGBlxTV9gPXYduJx_z6tRpsKI8_9DEtV6m7mtnja_vo6IT_F0PA/exec', { // Replace with your Google Sheets Web App URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidate: candidate })
        })
        .then(response => {
            if (response.ok) {
                console.log("Vote recorded!");
                // Reset form and update vote count here
                electionsForm.reset();
                studentIdContainer.style.display = 'none'; // Hide student ID input after submission
                voteCount++;
                voteCountDisplay.textContent = `Number of votes: ${voteCount}`;
            } else {
                console.error("Error recording vote");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
});