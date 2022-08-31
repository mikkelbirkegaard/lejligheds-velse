export default class Controller{
    initialize(model, view){
        this.model = model;
        this.view = view;
    }

        buildTemplate(Lejlihedtm){
         return `<div class="card">
         <div class"customerrow">
         <h4>Leglighedsnummer</h4>
         <p>${Lejlihedtm.getLejlighedensNummer()}</p>
         <h4>Lejere</h4>
         <p>${Lejlihedtm.getLejere()}</p>
         <h4>Indflytningsdato</h4>
         <p>${Lejlihedtm.getIndflytning()}</p>
         <h4>Husleje</h4>
         <p>${Lejlihedtm.getHusleje()}</p>
         <h4>Indskud</h4>
         <p>${Lejlihedtm.getIndskud()}</p>
         <button type="button" id="${Lejlihedtm.getLejlighedensNummer()}">Delete</button>
         </div>
         </div>`
         }

        snSearch (serialNumber){
         const lejlighed = this.model.lejlighedsListe.getLejlighed(serialNumber);
         let template = "";

         if (lejlighed !== null){
            template = this.buildTemplate(lejlighed);
         } else {
                template = `
               <tr class ="customerrow">
               <td colspan="8">Nothing to show</td>
               </tr>`;
         }
         this.view.message(template);
        }

        search (searchLejlighed){
            const lejlighed = this.model.lejlighedsListe.search(searchLejlighed);
            let template = "";

            if (lejlighed !== null){
             template = this.buildTemplate(lejlighed);
            } else {
                template = `
                <tr class ="customerrow">
                <td colspan="8">Nothing to show</td>
                </tr>`;
             }
            this.view.message(template);
        } 

        showAllLejligheder(){
            let template = "";
            for (const lejlighed of this.model.lejlighedsListe.allLejligheder()){
             template += this.buildTemplate(lejlighed);
            }
            this.view.message(template);
        }

        newLejlighed(lejlighed) {
            const doesLejlighedAlreadyExist = this.model.lejlighedsListe.getLejlighed(lejlighed.lejlighedsNummer);

            if (doesLejlighedAlreadyExist === null){
             this.model.lejlighedsListe.addLejlighed(lejlighed.lejlighedsNummer, lejlighed.indskud, lejlighed.lejere, lejlighed.indflytning, lejlighed.husleje);
             this.view.snackbar("Lejligheden er gemt"); 
             this.showAllLejligheder();
            } else{
                this.view.snackbar("Lejligheden eksiterer allerede");
            }
        }

        deleteLejlighed (ln) {
            this.model.lejlighedsListe.deleteLejligheder(ln);
            this.view.snackbar("Lejligheden er slettet")
        }

}



