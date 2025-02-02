// ==UserScript==
// @name         Connexion automatique à Moodle Université Paris-Cité
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Script qui permet de se connecter automatiquement au Moodle de l'Université Paris-Cité et s'arrête une fois connecté
// @author       Walid T
// @match        https://moodle.u-paris.fr/
// @match        https://moodle.u-paris.fr/login/index.php
// @match        https://auth.u-paris.fr/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const Identifiants = {
        nom_utilisateur: "",// Votre identifiant (ex: prenom.nom)
        motdepasse: ""// Votre mot de passe
    };

    function estConnecte() {
        return document.querySelector('#user-menu-toggle') !== null || document.body.innerText.includes("Tableau de bord");
    }

    function declencherBoutonParisCite() {
        const bouton = document.querySelector('a.btn.btn-block.btn-primary[href*="Shibboleth.sso/Login"]');
        if (bouton) {
            bouton.click();
            return true;
        }
        return false;
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

    function BoucleConnexion() {
        if (estConnecte()) {
            console.log("Déjà connecté, arrêt du script.");
            return;
        }

        let interval;

        if (window.location.href.includes('/login/index.php')) {
            interval = setInterval(() => {
                if (declencherBoutonParisCite()) {
                    clearInterval(interval);
                }
            }, 400);
        } else if (window.location.host === 'auth.u-paris.fr') {
            interval = setInterval(() => {
                if (remplirFormulaireAuth()) {
                    clearInterval(interval);
                }
            }, 400);
        } else if (window.location.host === 'moodle.u-paris.fr') {
            if (!estConnecte()) {
                console.log("Utilisateur non connecté, redirection vers la page de connexion.");
                window.location.replace('https://moodle.u-paris.fr/login/index.php');
            } else {
                console.log("Utilisateur connecté, arrêt total du script.");
            }
        }
    }

    setTimeout(BoucleConnexion, 500);
})();
