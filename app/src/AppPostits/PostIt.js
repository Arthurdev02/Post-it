
//constant privée, visible unisuqement dans ce fichier car non exporté 
const MODE_VIEW = 'view';
const MODE_EDIT = 'edit';

/* Modèle objet litteral d'un Post-it
{
    title: 'Toto à la plage',
    content: 'Il nage le crawl au milieu des requins',
    dateCreate: 1666180099794,
    dateUpdate: 1666180099794
}
*/
export class PostIt {

    title;
    content;
    dateCreate;
    dateUpdate;

    constructor(postItLiteral) {
        this.title = postItLiteral.title;
        this.content = postItLiteral.content;
        this.dateCreate = postItLiteral.dateCreate;
        this.dateUpdate = postItLiteral.dateUpdate;
    }

    //DOM : Document Object Model
    getDOM() {

        /*
        Template :
        
        <li>
            <div class="nota-header">
                <div class="nota-times">
                    <strong>création: </strong>LA_DATE<br>
                    <strong>màj: </strong>LA_DATE
                </div>
                    <div class="nota-cmd">
                        <div data-cmd="view">
                        <button type="button" data-role="edit">✏️</button>
                        <button type="button" data-role="delete">🗑️</button>
                    </div>
                        <div data-cmd="edit">
                            <button type="button" data-role="save">💾</button>
                            <button type="button" data-role="cancel">❌</button>
                        </div>
            </div>
            <div class="nota-title">THE_TITLE</div>
            <div class="nota-content">THE_CONTENT</div>
        </li>
*/
        const elLi = document.createElement('li');
        elLi.classList.add('nota');
        elLi.dataset.mode = MODE_VIEW;

        //Date formatée
        let dateCreate = new Date(this.dateCreate).toLocaleString();
        let dateUpdate = new Date(this.dateUpdate).toLocaleString();


        let innerDom = ``;
        innerDom += `<div class="nota-header">`;
        innerDom += `   <div class="nota-times">`;
        innerDom += `       <strong>création: </strong>${dateCreate}<br>`;
        innerDom += `       <strong>màj: </strong>${dateCreate}`;
        innerDom += `   </div>`;
        innerDom += `       <div class="nota-cmd">`;
        innerDom += `           <div data-cmd="view">`;
        innerDom += `               <button type="button" data-role="edit">✏️</button>`;
        innerDom += `               <button type="button" data-role="delete">🗑️</button>`;
        innerDom += `           </div>`;
        innerDom += `           </div>`;
        innerDom += `       <div data-cmd="edit">`;
        innerDom += `           <button type="button" data-role="save">💾</button>`;
        innerDom += `           <button type="button" data-role="cancel">❌</button>`;
        innerDom += `       </div>`;
        innerDom += `       </div>`;
        innerDom += `   <div class="nota-title">${this.title}</div>`;
        innerDom += `<div class="nota-content">${this.content}</div>`;

        //Ajout de la innerDom au li
        elLi.innerHTML = innerDom;

        return elLi;
    }
    /**
     * Donne la forme que doit avoir le post-it en literale (utilisé par JSON.stringify)
     * @returns {Object} La forme littérale du post-it
     */
    toJSON() {
        return {
            title: this.title,
            content: this.content,
            dateCreate: this.dateCreate,
            dateUpdate: this.dateUpdate
        };
    }
}