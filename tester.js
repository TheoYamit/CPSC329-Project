<!--Author - Arnav Bhalla-->
<!--30173316-->
document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', checkPasswordStrength);

    function checkPasswordStrength() {
        const password = document.getElementById('passwordInput').value;
        const strengthIndicator = document.getElementById('passwordStrength');
        const timeToCrackIndicator = document.getElementById('timeToCrack');

        // Reset the output display
        strengthIndicator.textContent = '';
        timeToCrackIndicator.textContent = '';

        // Define a scoring system
        fetch('commonPasswords.txt')
            .then(response => response.text())
            .then(data => {
                const commonPasswords = data.split('\n');

                // Interpret the strength score
                const minLength = 8;
                const hasUppercase = /[A-Z]/.test(password);
                const hasLowercase = /[a-z]/.test(password);
                const hasNumbers = /\d/.test(password);
                const hasSpecialChars = /[!@#$%^&*]/.test(password);

                let strength = 0;

                if (password.length >= minLength) {
                    strength++;
                }
                if (hasUppercase) {
                    strength++;
                }
                if (hasLowercase) {
                    strength++;
                }
                if (hasNumbers) {
                    strength++;
                }
                if (hasSpecialChars) {
                    strength++;
                }

                let strengthText = '';
                switch (strength) {
                    case 1:
                        strengthText = 'Weak';
                        break;
                    case 2:
                        strengthText = 'Moderate';
                        break;
                    case 3:
                        strengthText = 'Strong';
                        break;
                    case 4:
                        strengthText = 'Very Strong';
                        break;
                    case 5:
                        strengthText = 'Excellent';
                        break;
                    default:
                        strengthText = 'Very Weak';
                        break;
                }
                // Estimate time to crack with a brute-force attack
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
                const passwordLength = password.length;
                const totalPossibilities = characters.length ** passwordLength;
                const averageGuessesPerSecond = 1000000000; // Assumption: 1 billion guesses per second
                const secondsToCrack = totalPossibilities / (2 * averageGuessesPerSecond); // Divide by 2 for average cracking time

                // Convert seconds to a more human-readable format
                let timeToCrackText = '';
                if (secondsToCrack < 60) {
                    timeToCrackText = `${secondsToCrack} seconds`;
                } else if (secondsToCrack < 3600) {
                    timeToCrackText = `${Math.round(secondsToCrack / 60)} minutes`;
                } else if (secondsToCrack < 86400) {
                    timeToCrackText = `${Math.round(secondsToCrack / 3600)} hours`;
                } else if (secondsToCrack < 604800) {
                    timeToCrackText = `${Math.round(secondsToCrack / 86400)} days`;
                } else {
                    timeToCrackText = `${Math.round(secondsToCrack / 604800)} weeks`;
                }

                timeToCrackIndicator.textContent = `Estimated Time to Crack: ${timeToCrackText}`;
                strengthIndicator.textContent = `Password Strength: ${strengthText}`;

                // Check against the list of common passwords
                if (commonPasswords.includes(password)) {
                    strengthIndicator.textContent = "Password Strength: Very Weak (Common Password)";
                    timeToCrackIndicator.textContent = "Estimated Time to Crack: Instant";
                    return;
                }
            });
    }
});
