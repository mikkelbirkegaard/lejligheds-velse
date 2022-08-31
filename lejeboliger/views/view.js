import Lejlighed from "../utils/lejlighedClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const snField = document.getElementById("snField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const lejlighedsnr= document.getElementById("lejlighedsnr");
        const lejere = document.getElementById("lejere");
        const indflytningsdato = document.getElementById("indflytningsdato");
        const husleje = document.getElementById("husleje");
        const indskud = document.getElementById("indskud");
        const showAlllejlihederButton = document.getElementById("showAlllejlihederButton");
        const guitarDialogForm = document.getElementById("guitarDialogForm");
        const addGuitarButton = document.getElementById("addGuitarButton");
        const guitarDialog = document.getElementById("guitarDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSnField = document.getElementById("hiddenSnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");
        

        self.controller = controller;

        showAlllejlihederButton.onclick = function ()  {
            self.controller.showAllLejligheder();
        }

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(snField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalLejlighed = new Lejlighed (lejlighedsnr.value, indskud.value, lejere.value,indflytningsdato.value, husleje.value);

            console.log(optimalLejlighed)

            self.controller.search(optimalLejlighed)
            searchPanel.classList.remove("searchPanelAnim")
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim")
        }

        closeCross.onclick = function () {
            searchPanel.classList.add("searchPanelAnim")
        }


        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim")
        }

        // Dialog eventhandler 

        addGuitarButton.onclick = function() {
            guitarDialogForm.reset();
            guitarDialog.showModal();
        }

        cancelButton.onclick = function () {
            guitarDialog.close();
        }

        guitarDialogForm.onsubmit = function() {
            self.controller.newLejlighed({
                lejlighedsNummer: document.getElementById ("lejlighedsnummerfield").value,
                lejere: document.getElementById ("lejerefield").value,
                indflytning: document.getElementById ("indflytningfield").value,
                husleje: parseFloat (document.getElementById ("huslejefield").value),
                indskud: parseFloat (document.getElementById ("indskudfield").value)
            })
        }

        searchResult.onclick = function (e){
            if (e.target.nodeName === "BUTTON"){
                hiddenSnField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function () {
            self.controller.deleteLejlighed(hiddenSnField.value);
            self.controller.showAllLejligheder();
        }



    }

    message(template){
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage){
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout (function(){
            snackbar.className=snackbar.className.replace("show", "");
        },3000);

    }
} 