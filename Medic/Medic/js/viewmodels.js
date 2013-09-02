(function () {
    var patientsList = new WinJS.Binding.List([]);

    var loadPatients = function(){
        var patientsDTOs = Data.getPatients();
        
        for (var i = 0; i < patientsDTOs.length; i++) {   
            patientsList.push(patientsDTOs[i]);
        }        
    }    

    var sortBy = function (property, ascending) {        
        ascending = ascending || true;
        var ascendingModifier = ascending ? 1 : -1;

        patientsList.sort(function (left, right) {

            var result = left[property] > right[property] ? 1 : -1;

            return result * ascendingModifier;
        });
    }

    var addPatient = function (fname, mname, lname, age, firstSixFromUCN) {
        patientsList.push(new Models.Patient(fname, mname, lname, age, firstSixFromUCN));
    };

    //loadPatients();

    //var computerTemplate = new WinJS.Binding.Template(null, {
    //    href: "/templates/computer-template.html"
    //});

    //computerTemplate.render(firstComputerObservable, document.body).then(function () {

    WinJS.Utilities.markSupportedForProcessing(sortBy);
    WinJS.Utilities.markSupportedForProcessing(addPatient);

    WinJS.Namespace.define("PatientsVM", {
        loadPatients: loadPatients,
        patients: patientsList,
        sortPatientsBy: sortBy,
        addPatient: addPatient
    });
})();