// Ce fichier est structuer de manièer a simuler  un paterne Singleton en tenant compte des limitaions du javascript
// Import de la feuille de style
import '../assets/css/style.css';

// La classe n'est pas importée, ce qui empêche  de l'importer et de l'instancier 
// C'est l'équivalent du contructeur privé en PHP
class App  {
    /*
    * Les App start
    */
start() {

console.log('App started');
}
}


//On crée une instance de App dans une variable
// La vatiable est l'équivalent de la propriété statique "$instance" en PHP
const app = new App();

//On exporte la variable
//Si à l'extéreur il y a plusieur import de cette variable le systeme aura méemoriser le premier et pour les uivant dinner ce qui a été mémorise 
//c'est l'équivalent de la méthode statique "getApp en PHP
export default app;
