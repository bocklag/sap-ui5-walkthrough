sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onShowHello : function () {
            // Show a Native JS Alert
            alert("Hello there!");
        }
    });
});