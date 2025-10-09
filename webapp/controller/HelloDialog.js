sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict"

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;

            // Create the Dialog Lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                // Load Asynchronous XML Fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // Connect the dialog to the Root View of This Particular Component
                    // (Models, Life Cycles)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oView.byId("helloDialog").open();
            }
        }
    })
})