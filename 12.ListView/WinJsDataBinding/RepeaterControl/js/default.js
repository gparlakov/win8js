/// <reference path="data-model.js" />
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {                
            } else {
            }
            
            args.setPromise(WinJS.UI.processAll().then(function () {

                var createComputerBtn = document.getElementById("create-computer");

                createComputerBtn.addEventListener("click", function () {
                    var compName = document.getElementById("name").value;
                    var compPrice = document.getElementById("price").value;
                    var procModel = document.getElementById("model").value;
                    var procFreq = document.getElementById("freq").value;
                    var image = document.getElementById("image").value;
                    var manufacturer = document.getElementById("manufactorer").value;

                    var newComp = Data.getComputer(compName, compPrice, image, procModel, procFreq, manufacturer);
                    Data.addComputer(newComp);
                })
            }));
        }
    };

    app.oncheckpoint = function (args) {};

    app.start();
})();
