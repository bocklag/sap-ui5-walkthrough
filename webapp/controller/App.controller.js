sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function () {
            // Set the Data Model on the View
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // Set i18n Model on View
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
            

        },
        onShowHello: function () {
            // Read Msg from i18n Model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // Show a Native JS Alert
            //alert("Hello there!");

            // Show Toast Msg.
            MessageToast.show(sMsg)
        }
    });
});