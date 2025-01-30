// Ce fichier est structuré de manière à simuler un pattern "Singleton" (en tenant compte des limitations du JS)

// Import de la feuille de style
import '../assets/css/style.css';
import { PostIt } from './PostIt';

// La class n'est pas exportée, ce qui empêche de l'importer et de l'instancier
// C'est l'équivalent du constructeur privé en PHP
class App {

    /**
     * Champ titre du formulaire d'ajout
     */
    elInputNewPiTitle;
    /**
     * Champ contenu du formlaire d'ajout
     */
    elTextareaNewPiContent;
    /**
     * Conteneur des post-its
     */
    elOlPiList;

    /**
     * Démarreur de l'application
     */
    start() {
        console.log('Application démarrée ...');

        // Rendu de l'Interface Utilisateur
        this.renderBaseUI();

        //TEST 
        const pTest = new PostIt({

            title: 'Toto à la plage',
            content: 'Il nage le crawl au milieu des requins',
            dateCreate: 1666180099794,
            dateUpdate: 1666180099794
        })
        this.elOlPiList.append(pTest.getDOM());
    }

    /**
     * Effectue le rendu de l'UI de base
     */
    renderBaseUI() {
        /*
        Template:

        <header>
            <h1>Post-Its</h1>

            <form novalidate>
                <input type="text" placeholder="Titre">
                <textarea placeholder="Contenu"></textarea>
                <button type="button">➕</button>
            </form>

            <div>
                <button type="button">🗑️</button>
            </div>
        </header>

        <main>
            <ol id="nota-list"></ol>
        </main>
        */

        // -- <header>
        const elHeader = document.createElement('header');
        elHeader.innerHTML = '<h1>Post-Its</h1>';

        // - <form novalidate>
        const elForm = document.createElement('form');
        elForm.noValidate = true;

        // <input type="text" placeholder="Titre">
        this.elInputNewPiTitle = document.createElement('input');
        this.elInputNewPiTitle.type = 'text';
        this.elInputNewPiTitle.placeholder = 'Titre';

        // <textarea placeholder="Contenu"></textarea>
        this.elTextareaNewPiContent = document.createElement('textarea');
        this.elTextareaNewPiContent.placeholder = 'Contenu';

        // <button type="button">➕</button>
        const elBtnNewPiAdd = document.createElement('button');
        elBtnNewPiAdd.type = 'button';
        elBtnNewPiAdd.textContent = '➕';
        // .bind( this ) permet de faire en sorte que le contexte du handler soit toujours App (au lieu du boutton)
        elBtnNewPiAdd.addEventListener('click', this.handlerAddNewPostIt.bind(this));

        // Injection <input>+<textarea>+<button> dans <form>
        elForm.append(this.elInputNewPiTitle, this.elTextareaNewPiContent, elBtnNewPiAdd);

        // - <div>
        const elDivClear = document.createElement('div');

        // <button type="button">🗑️</button>
        const elBtnClear = document.createElement('button');
        elBtnClear.type = 'button';
        elBtnClear.textContent = '🗑️';
        elBtnClear.addEventListener('click', this.handlerClear.bind(this));

        // Injection <button> dans <div>
        elDivClear.append(elBtnClear);

        // Injection <form>+<div> dans <header>
        elHeader.append(elForm, elDivClear);


        // -- <main>
        const elMain = document.createElement('main');
        //<ol id="nota-list"></ol>
        this.elOlPiList = document.createElement('ol');
        this.elOlPiList.id = 'nota-list';

        //Injection <ol> dans <main>
        elMain.append(this.elOlPiList);
        // -- Injection <header>+<main> dans <body>
        document.body.append(elHeader, elMain);
    }

    /**
     * Gestionnaire d'ajout d'un nouveau Post-It
     * 
     * @param {Event} evt Événement produit intercepté par l'écouteur
     */
    handlerAddNewPostIt(evt) {
        // TODO: LE code
    }

    /**
     * Gestionnaire de nettoyage du tableau
     * 
     * @param {Event} evt Événement produit intercepté par l'écouteur
     */
    handlerClear(evt) {
    // TODO: LE code
    }

}

// On crée une instance de App dans une variable
// La variable est l'équivalent de la propriété statique "$instance" en PHP
const app = new App();

// On exporte cette variable.
// Si à l'extérieur il y a plusieurs imports de cette variable,
// le système aura mémorisé le premier, et pour les suivants donnera ce qui a été mémorisé
// C'est l'équivalent de la méthode statique "getApp" en PHP
export default app;