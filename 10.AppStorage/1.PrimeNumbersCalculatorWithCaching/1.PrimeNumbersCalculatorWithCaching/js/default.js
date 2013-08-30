/// <reference path="PrimesCalculator.js" />

// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var currentMaxWorkers = function (maxWorkers) {
        var localFolder = Windows.Storage.ApplicationData.current.localFolder;

        var workers;
        localFolder.createFileAsync("max-workers-count.txt", Windows.Storage.CreationCollisionOption.openIfExists)
            .then(function (file) {
                if (maxWorkers) {
                    Windows.Storage.FileIO.writeTextAsync(file, maxWorkers);
                }
                else {
                    Windows.Storage.FileIO.readTextAsync(file).then(function (text) {
                        maxWorkers = text;
                    });
                }
            });

        return workers;
    }

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            //args.setPromise(WinJS.UI.processAll());
        }

        var maxWorkers = currentMaxWorkers();

        var calc = new PrimesCalculator(maxWorkers);
        var contentElement = document.getElementById("content");

        var numberInput = document.getElementById("number");
        var primeNumbersGenerateBtn = document.getElementById("calculate-primes-to");

        var firstNumberInput = document.getElementById("firstNumber");
        var secondNumberInput = document.getElementById("secondNumber");
        var countInput = document.getElementById("count");
        var primeNubmersFromToBtn = document.getElementById("calculate-primes-from-to");

        primeNumbersGenerateBtn.addEventListener("click", function () {
            var num = numberInput.value;

            if (isNaN(num) || num == "") {
                contentElement.innerHTML += "<p>Error: not a number!</p>";
                return;
            }

            calc.calculatePrimesToN(num).done(
                function (data) {
                    var newContent = "<p class='content-holder'>" + data.join(", ") + "</p>";
                    contentElement.innerHTML = newContent + contentElement.innerHTML;
                },
                function (error) {
                    var newContent = "<p>Error:" + error + "</p>";
                    contentElement.innerHTML = newContent + contentElement.innerHTML;
                }
            );
        });

        primeNubmersFromToBtn.addEventListener("click", function () {
            var firstNumber = firstNumberInput.value;
            var secondNumber = secondNumberInput.value;

            if (isNaN(firstNumber) || firstNumber == "" || isNaN(secondNumber) || secondNumber == "") {
                contentElement.innerHTML += "<p>Error: not a number!</p>";
            }

            var count = countInput.value || 0;

            calc.calculatePrimesFromTo(firstNumber, secondNumber, count).done(
                function (data) {
                    var newContent = "<p class='content-holder'>" + data.join(", ") + "</p>";
                    contentElement.innerHTML = newContent + contentElement.innerHTML;
                },
                function (error) {
                    var newContent = "<p>Error:" + error + "</p>";
                    contentElement.innerHTML = newContent + contentElement.innerHTML;
                }
            );
        });

        WinJS.Utilities.id("max-workers-count").listen("change", function (event) {
            var value = parseInt(event.target.value); 
            calc.maxWorkers = value;
            currentMaxWorkers(value);
        }, false);
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
