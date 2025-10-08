sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";
    /*
    new Text({
        text: "Hello UI5!"
    }).placeAt("content")
    */
   XMLView.create({
    viewName : "sap.ui.demo.walkthrough.view.App"
   }).then( function (oView) {
        oView.placeAt("content");
   });
})