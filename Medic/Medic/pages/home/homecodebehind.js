(function () {

    var goToPatientDetails = function (invokeEvent) {
        WinJS.Navigation.navigate("/pages/persondetails/persondetails.html", {
            indexInPatientsList: invokeEvent.detail.itemIndex
        });
    }

    //WinJS.Utilities.markSupportedForProcessing(goToPatientDetails);
    WinJS.Utilities.markSupportedForProcessing(goToPatientDetails);

    WinJS.Namespace.define("HomeCodeBehind", {
        goToPatientDetails: goToPatientDetails
        //callLoadComputers: function () {
        //    ViewModels.loadComputers();
        //},        
    })
})();