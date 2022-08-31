export default class Lejlighed {
    constructor (lejlighedsNummer,indskud,lejere,indflytning,husleje) {
         this.lejlighedsNummer = lejlighedsNummer;
         this.indskud = indskud;
         this.lejere = lejere;
         this.indflytning = indflytning; 
         this.husleje = husleje;
    }

    getLejlighedensNummer(){
        return this.lejlighedsNummer;
    }

    getIndskud(){
        return this.indskud;
    }

    getLejere(){
        return this.lejere;
    }

    getIndflytning(){
        return this.indflytning;
    }

    getHusleje(){
        return this.husleje;
    }

}