/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
var PrimesCalculator = WinJS.Class.define(
    function () {
        this.upToNumberWorker = new Worker("js/primesWorker.js");
        this.fromToWorker = new Worker("js/primesWorker.js");

        this.workersCount = 0;       
    }, {
        calculatePrimesToN: function (n) {
            var self = this;

            return new WinJS.Promise(function (success, error) {
                if (self.workersCount >= 3) {
                    error("This operation is being used by someone else. Try again later.");
                }
                
                self.upToNumberWorker.onmessage = function (message) {
                    self.workersCount--;
                    success(message.data);
                    self.upToNumberWorker.onmessage = null;
                }

                self.upToNumberWorker.postMessage({ number: n });
                self.workersCount++;
            });
        },
        calculatePrimesFromTo: function (fromNumber, toNumber, count) {
            var self = this;

            return new WinJS.Promise(function (success, error) {
                if (self.workersCount >= 3) {
                    error("This operation is being used by someone else. Try again later.");
                }

                self.fromToWorker.onmessage = function (message) {
                    self.workersCount--;
                    success(message.data);
                    self.upToNumberWorker.onmessage = null;
                };

                self.fromToWorker.postMessage({
                    firstNumber: fromNumber,
                    secondNumber: toNumber,
                    count: count
                });

                self.workersCount++;
            });
        }
    });