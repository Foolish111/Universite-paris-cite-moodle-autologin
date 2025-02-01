// ==UserScript==
// @name         Connexion automatique à Moodle Université Paris-Cité
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Script qui permet de se connecter automatiquement au moodle de l'Université Paris-Cité
// @author       Walid T
// @match        https://moodle.u-paris.fr/*
// @match        https://auth.u-paris.fr/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Il faut mettre ses identifiants ici
    const Identifiants = {
        nom_utilisateur: "",// Votre identifiant (ex: prenom.nom)
        motdepasse: ""// Votre mot de passe
    };

    // Vérifie si l'utilisateur est connecté en cherchant le menu utilisateur
    function estConnecte() {
        return document.querySelector('#user-menu-toggle .userinitials') !== null;
    }

    // Clic automatique sur le bouton spécifique
    function declencherBoutonParisCite() {
        document.querySelector('a.btn.btn-block.btn-primary[href*="Shibboleth.sso/Login"]')?.click();
    }

    function remplirFormulaireAuth() {
        const champUser = document.querySelector("#username");
        const champMdp = document.querySelector("#password");
        const bouton = document.querySelector("button[name='_eventId_proceed']");

        if (champUser && champMdp && bouton) {
            champUser.value = Identifiants.nom_utilisateur;
            champMdp.value = Identifiants.motdepasse;
            setTimeout(() => bouton.click(), 100);
            return true;
        }
        return false;
    }

    // Boucle de connexion qui permet au script de marcher peu importe la page
    function BoucleConnexion() {
        // Si l'utilisateur est déjà connecté, on arrête tout
        if (estConnecte()) {
            return;
        }

        // Page de login Moodle
        if (window.location.href.startsWith('https://moodle.u-paris.fr/login/index.php')) {
            const interval = setInterval(() => {
                if (declencherBoutonParisCite()) clearInterval(interval);
            }, 100);
        }

        // Page d'authentification
        else if (window.location.host === 'auth.u-paris.fr') {
            const interval = setInterval(() => {
                if (remplirFormulaireAuth()) clearInterval(interval);
            }, 100);
        }

        // Redirection si déconnecté
        else if (window.location.host === 'moodle.u-paris.fr') {
            window.location.replace('https://moodle.u-paris.fr/login/index.php');
        }
    }

    // Démarrage avec un délai initial
    setTimeout(BoucleConnexion, 100);
})();