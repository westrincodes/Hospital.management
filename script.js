// script.js
document.addEventListener('DOMContentLoaded', function() {
    var nurseLoginButton = document.getElementById('nurse-login');
    var doctorLoginButton = document.getElementById('doctor-login');
    var nurseSection = document.getElementById('nurse-section');
    var doctorSection = document.getElementById('doctor-section');

    // Function to show a section and hide all others
    function showSection(sectionToShow) {
        // Hide all sections
        var sections = [nurseSection, doctorSection];
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the requested section
        sectionToShow.style.display = 'block';
    }

    // Event listeners for the login buttons
    nurseLoginButton.addEventListener('click', function() {
        showSection(nurseSection);
    });

    doctorLoginButton.addEventListener('click', function() {
        showSection(doctorSection);
    });

    // Add more event listeners and functions as needed for other interactions
});
