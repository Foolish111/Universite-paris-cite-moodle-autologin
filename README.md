# Université Paris Cité Moodle Auto-Login

A script to automatically log in to the Moodle platform of **Université Paris Cité** on both PC and Android, as it is currently not possible to remain logged in permanently.

## Prerequisites

- **Tampermonkey** (or **Violentmonkey**) installed on your browser (Chrome, Firefox, etc.)  
- **Android**: Use Firefox Nightly. See [this tutorial](https://www.youtube.com/watch?v=GXcg8r0c-Lk) for setup instructions.

## Installation

1. **Install Tampermonkey**
   - On PC: Download it from the [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - On Android: Follow [this tutorial](https://www.youtube.com/watch?v=GXcg8r0c-Lk) (same as in the Prerequisites section)

2. **Add the Script**  
   - Click the Tampermonkey icon and select **"Create a new script"**
   - Delete the existing content and paste the code from the `Moodle Université Paris-Cité.js` file
   - Enter your username and password:
```javascript
        nom_utilisateur: "firstname.lastname", // Your username (e.g., firstname.lastname)
        motdepasse: "YourPassword" // Your password
