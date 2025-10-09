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
            var oView = this.getView();

            // Create the Dialog Lazily
            if (!this.byId("helloDialog")) {
                // Load Asynchronous XML Fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog"
                }).then(function (oDialog) {
                    // Connect Dialog to the Root View of the Component (Model, Lifecycles)
                    oView.addDependent(oDialog);
                    oDialog.open();

                })
            } else {
                this.byId("helloDialog").open();
            }
        }
    })

})