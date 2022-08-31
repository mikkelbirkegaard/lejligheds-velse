 import Inventory from "../utils/inventoryClass.js";

 export default class Model {
    constructor(){
        this.lejlighedsListe = new Inventory
        this.lejlighedsListe.addLejlighed("01", 20000, "Mikkel Christiansen", "1 August, 2022", 6000);

        this.lejlighedsListe.addLejlighed("02", 25000, "Julie Ballegaard", "3 november, 2021", 7000);

        this.lejlighedsListe.addLejlighed("03", 30000, "Nikolaj friis", "2 April, 2022", 10.000);

        this.lejlighedsListe.addLejlighed("04", 20000, "Maja Kræmmer", "3 juli, 2022", 6000);

        this.lejlighedsListe.addLejlighed("05", 32000, "Cecilie Jensen", "4 maj, 2022", 11.000);

        this.lejlighedsListe.addLejlighed("06", 25000, "Mathias Birkegaard", "3 december, 2021", 7000);

        this.lejlighedsListe.addLejlighed("07", 20000, "Malte Krog", "10 juni, 2022", 6000); 
    }

 }