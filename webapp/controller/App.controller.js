sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onOpenDialog : function () {
            //Fragment 재호출 위한 명령어
            this.getOwnerComponent().openHelloDialog();
        }
    });
});