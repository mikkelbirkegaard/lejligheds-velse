import Lejlighed from "./lejlighedClass.js"


export default class Inventory{
    constructor(){
        this.lejligheder = [];
    }

    addLejlighed(lejlighedsNummer, indskud, lejere, indflytning, husleje){
        const newLejlighed = new Lejlighed(lejlighedsNummer, indskud, lejere, indflytning, husleje);
        this.lejligheder.push(newLejlighed);
    }

    getLejlighed(lejlighedsNummer){
        for (const lejlighed of this.lejligheder){
            if (lejlighedsNummer === lejlighed.lejlighedsNummer){
                return lejlighed;
            }
        }
        //The value null represent the intentional absence of an object value;
        return null;
    }

    search(idealLejlighed){
        //destructuring
        const {lejlighedsNummer, indskud, lejere, indflytning, husleje} = idealLejlighed;

        console.log(lejlighedsNummer, indskud, lejere, indflytning, husleje)

        for (const lejlighed of this.lejligheder) {
            // if (lejlighed.lejlighedsNummer === lejlighedsNummer && lejlighed.indskud === indskud && lejlighed.lejere === lejere && lejlighed.indflytning===indflytning && lejlighed.husleje===husleje){
                if (lejlighed.lejlighedsNummer === lejlighedsNummer && parseFloat(lejlighed.indskud) === parseFloat(indskud) && lejlighed.lejere === lejere && lejlighed.indflytning===indflytning && parseFloat(lejlighed.husleje) === parseFloat(husleje)) {
                return lejlighed;
            }
        }

        return null;
    }

    allLejligheder(){
        return this.lejligheder;
    }

    deleteLejligheder(ln) {
        const index=this.lejligheder.map(lejlighed => lejlighed.lejlighedsNummer).indexOf(ln);
        this.lejligheder.splice(index, 1); //removes lejlighed from lejlighed object list
    }
}