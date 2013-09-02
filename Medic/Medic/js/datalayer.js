(function () {

    var patients = [
            new Models.Patient("Georgi", "Vesselinov", "Parlakov", 30, "830125"),
            new Models.Patient("Petar", "Petrov", "Petrov", 30, "830125"),
            new Models.Patient("Petq", "Georgieva", "Parlakova", 30, "830125"),
            new Models.Patient("Ani", "Petrova", "Parvakova", 30, "830125")
    ]

    var getPatients = function () {
        return patients;
    }

    var addPatient = function(patient){
        patients.push(patient);
    }

    WinJS.Namespace.define("Data", {
        getPatients: getPatients,
        addPatient: addPatient
    });
})()