import { PostIt } from "../PostIt";

const STORAGE_NAME = 'post-its';

export class PostItService {
    /**
     * CRUD: Read All
     */
    getAll() {
        let result = [];

        console.log('Lecture...');

        const serializedData = localStorage.getItem(STORAGE_NAME);

        // Si les données n'existent pas encore
        if (serializedData === null) return result;

        // On tente de désérialiser les données du storage
        try {
            const literalResult = JSON.parse(serializedData);

            // On fabrique des Post-Its à partir de leur forme litérale
            for (let literalPostIt of literalResult) {
                result.push(new PostIt(literalPostIt));
            }
        }
        catch (e) {
            // Si cela échoue, c'est à cause d'une corruption des données
            // Par exemple suite à une intervention humaine dans la console
            // On supprime les données corrompues
            localStorage.removeItem(STORAGE_NAME);
        }

        return result;
    }

    /**
     * CRUD: Create All
     */
    saveAll(arrData) {
        console.log('Sauvegarde...');

        // Sérialisation du tableau de données: Il es transformé en chaîne de caratères
        const serializedData = JSON.stringify(arrData);

        try {
            localStorage.setItem(STORAGE_NAME, serializedData);
        }
        catch (e) {
            // Si enregistrement échoué
            return false;
        }

        // Si enregistrement réussi
        return true;
    }
}