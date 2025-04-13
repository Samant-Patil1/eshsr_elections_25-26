document.addEventListener('DOMContentLoaded', function() {
    const voteTypeRadios = document.querySelectorAll('input[name="voteType"]');
    const studentIdContainer = document.getElementById('studentIdContainer');
    const electionsForm = document.getElementById('electionsForm');
    const voteCountDisplay = document.getElementById('voteCount');
    let voteCount = 0; // Initialize vote count

    // Show/hide student ID input based on voting option
    // Show/hide student ID input based on voting option
    voteTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'withName') {
                studentIdContainer.style.display = 'block'; // Show the student ID input
            } else {
                studentIdContainer.style.display = 'none'; // Hide the student ID input
            }
        });
    });

    // Handle form submission
    electionsForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Check if a valid student ID is provided when voting with a name
        const studentId = document.getElementById('studentId').value;
        if (studentId.startsWith('ESHSR@') && studentId.endsWith('123')) {
            // Redirect to admin page (replace 'admin.html' with your actual admin page)
            window.location.href = 'admin.html';
        } else {
            // Increment vote count and update display
            voteCount++;
            voteCountDisplay.textContent = `Number of votes: ${voteCount}`;

            // Reset the form
            electionsForm.reset();
            studentIdContainer.style.display = 'none'; // Hide student ID input after submission

            // Here you can add code to send the vote data to your database
            // For example, using fetch or XMLHttpRequest to send data to your server
        }
    });
});