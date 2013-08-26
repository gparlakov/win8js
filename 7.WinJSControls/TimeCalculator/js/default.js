// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
            
            var hour = 1000 * 60 * 60;
            var day = hour * 24;

            var menuOpenButton = document.getElementById("open-button");
            var contentHolder = document.getElementById("content");
            
            var myConverter = WinJS.Binding.converter(function (val) {
                return val ? "block" : "none";
            });

            menuOpenButton.addEventListener("click", function () {
                var menu = document.getElementById("menu-id").winControl;
                menu.show();
            });
                      

            var switchTime = document.getElementById("show-hide-time");
            var switchTimeControl = switchTime.winControl;
            var time1 = document.getElementById("time-picker-1");
            var time2 = document.getElementById("time-picker-2");

            switchTime.addEventListener("change", function () {
                var value = switchTimeControl.checked;
                if (value) {
                    time1.className = "";
                    time2.className = "";
                }
                else {
                    time1.className = "hidden";
                    time2.className = "hidden";
                }
            }, false);

            var calculateDays = function () {
                var date1 = document.getElementById("date-picker-1").winControl.current;
                var date2 = document.getElementById("date-picker-2").winControl.current;
                var days = Math.abs(date2 - date1) / day;
                return days;
            }

            var calculateHours = function () {
                var time1 = document.getElementById("time-picker-1").winControl.current;
                var time2 = document.getElementById("time-picker-2").winControl.current;
                var hours = Math.floor(Math.abs(time2 - time1) / hour);

                return hours;
            }
                        
            document.getElementById("calculate-days-button")
                .addEventListener("click", function () {
                    var days = calculateDays();
                    content.innerHTML = "<p class='calculate-days'>Days = <strong>" +
                        days + "</strong></p>" + content.innerHTML;
                }, false);

            document.getElementById("calculate-hours-button")
                .addEventListener("click", function () {
                    var hours = calculateHours();
                    content.innerHTML = "<p class='calculate-days'>Hours = <strong>" +
                        hours + "</strong></p>" + content.innerHTML;
                }, false);

            document.getElementById("calculate-hours-and-days-button")
                .addEventListener("click", function () {
                    var days = calculateDays();
                    var hours = calculateHours();
                    content.innerHTML = "<p class='calculate-hours-days'><strong>" + hours +
                        "</strong> Hours and <strong>" + days + "</strong> Days</p>" +
                        content.innerHTML;
                }, false);

        }
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
