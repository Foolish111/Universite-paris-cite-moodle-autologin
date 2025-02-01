# Universite-paris-cite-moodle-autologin
Script pour se connecter automatiquement à Moodle de l'Université Paris-Cité sur pc/et android car il n'est pas possible de faire en sorte d'être connecté en permanence. 

## Prérequis

- **Tampermonkey** (ou **Violentmonkey**) installé sur votre navigateur (Chrome, Firefox, etc.)  
- **Android** : Firefox Nightly, regardez [ce tutoriel](https://www.youtube.com/watch?v=GXcg8r0c-Lk)

## Installation

1. **Installez Tampermonkey**
   - Pour PC, téléchargez-le depuis [le Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - Pour Android, regardez [ce tutoriel](https://www.youtube.com/watch?v=GXcg8r0c-Lk) (c'est le même que celui dans Prérequis)


3. **Ajoutez le script**  
   - Cliquez sur l'icône de Tampermonkey et sélectionnez **"Create a new script"**  
   - Supprimez le contenu existant et collez le code du fichier 'Moodle Université Paris-Cité.js'
   - Mettez votre nom d'utilisateur et votre mot de passe
```javascript
        nom_utilisateur: "prenom.nom",// Votre identifiant (ex: prenom.nom)
        motdepasse: "Motdepasse"// Votre mot de passe
```
   - Sauvegardez le script en faisant Ctrl +S ou en allant dans dans **Fichiers > Enregistrer**

3. **Tester le script**

   - Testez le script en allant sur https://moodle.u-paris.fr/
  
## Contribuer

N'hésitez pas à soumettre des pull requests si vous avez des améliorations à proposer, des corrections de bugs ou des suggestions pour améliorer ce script. Toute contribution est la bienvenue et sera revue avec attention !
