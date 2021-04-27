import firebase from 'firebase/app';
import { instanceFirebaseAuth } from './firebase-initialisation'
import { instanceFirebaseUI } from './firebase-initialisation';
import 'firebaseui/dist/firebaseui.css';
/* Ex3 - Point D)i) */
import {collUtil} from './config';
import {instanceFirestore } from './firebase-initialisation';
import Utilisateur from '../composants/Utilisateur';
/**
 * Initialiser le widget FirebaseUI et l'injecte dans la page Web
 * @param {string} eltAncrage sélecteur DOM où injecter le widget de connexion
 */
export function initUI(eltAncrage) {
  instanceFirebaseUI.start(eltAncrage, {
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        fullLabel: 'Connexion avec Google'
      }
    ],
    signInFlow: 'popup'
  });
}

/**
 * Observer les changements de connexion dans Firebase Auth pour valider 
 * l'état de l'utilisateur connecté
 * @param {Function} mutateurEtatUtil fonction de mutation de l'état utilisateur
 */
export function observerConnexion(mutateurEtatUtil) {
  instanceFirebaseAuth.onAuthStateChanged(
    util => {
      // On fait la mutation de l'état utilisateur
      mutateurEtatUtil(util);
      // Si un utilisateur est connecté ...
      if(util) {
        // ... on créé son profil dans la collection Firestore au besoin
        creerProfil(util.uid, util.displayName, util.email);
      }
    }
  );
}

/**
 * Créer un profil d'utilisateur s'il n'y en pas un ; fusionner le profil sinon
 * @param {string} id Identifiant Firebase de l'utilisateur connecté
 * @param {string} nom Nom de l'utilisateur
 * @param {string} courriel Adresse courriel de l'utilisateur
 */
export function creerProfil(id, nom, courriel) {
  /* Ex3 - Point D)ii) */
 
   /*  instanceFirestore.collection(collUtil).doc(util.uid).set(
    {nom: util.displayName, courriel: util.email},
    {merge:true}
  ); */
 /*  instanceFirestore.collection(collUtil).doc(Utilisateur.uid),(
   { id:id,
    nom:nom,
    courriel:courriel},
    {merge:true}
  );
   */
 /*  instanceFirestore.collection(collUtil).doc(util.uid).set(
   { id:id,
    nom:nom,
    courriel:courriel},
    {merge:true}
*/
   
 
}

/**
 * Déconnecter l'utilisateur de Firebase Auth
 */
export function deconnexion() {
  instanceFirebaseAuth.signOut();
}