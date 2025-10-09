sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // Read Msg from i18n Model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");

            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // Show a Native JS Alert
            //alert("Hello there!");

            // Show Toast Msg.
            MessageToast.show(sMsg);
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    })

})