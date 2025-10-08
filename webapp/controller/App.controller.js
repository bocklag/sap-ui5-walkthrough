sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onShowHello : function () {
            // Show a Native JS Alert
            //alert("Hello there!");
            MessageToast.show("Hello there!")
        }
    });
});