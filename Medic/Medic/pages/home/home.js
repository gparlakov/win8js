// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        init: function () {
        //    var computerTemplate = new WinJS.Binding.Template(null, {
        //        href: "/templates/computer-template.html"
        //    });

        //    computerTemplate.render(firstComputerObservable, document.body).then(function () {

            PatientsVM.loadPatients();            
        },

        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            document.getElementById("go-to-persondetails").addEventListener("click", function () {
                WinJS.Navigation.navigate("pages/persondetails/persondetails.html")
            })


            document.getElementById("exit").addEventListener("click", function () {
                app.stop();
            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
