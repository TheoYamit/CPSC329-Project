# Password Strength Tester

This is a simple web application that checks the strength of a password and estimates the time it would take to crack it. Additionally, it checks whether the provided password is a common one.

## Features

- Check the strength of a password.
- Estimate the time it would take to crack the password using a brute-force attack.
- Detect if the password is a common one.

## Usage

1. Open the `index.html` file in a web browser.

2. Enter a password in the input field.

3. Click the "Check Password Strength" button.

4. The application will provide feedback on the password strength and an estimated time to crack it.

## Files

- `index.html`: The main HTML file for the web application.
- `tester.js`: The JavaScript file that contains the functionality for checking password strength.
- `commonPasswords.txt`: A text file containing a list of common passwords.
- `README.md`: This documentation file.

## Implementation

- The password strength is determined using a scoring system.
- The estimated time to crack the password is calculated based on a brute-force attack.
- Common passwords are loaded from the `commonPasswords.txt` file.

## Resetting Display

The display is reset every time you click the "Check Password Strength" button to provide fresh feedback for each new password.
