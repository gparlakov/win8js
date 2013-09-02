(function () {
    var PatientModel = WinJS.Class.define(function (fname, mname, lname, age, firstSixFromUCN) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.age = age;
        this.firstSixFromUCN = firstSixFromUCN;
        var getFullName = function () {
            return this.fname + " " + this.mname + " " + this.lname;
        };

        this.getFullName = getFullName;
    }, {
        fname: "",
        mname: "",
        lname: "",
        age: "",
        firstSixFromUCN: "",
        toJSON: function () {
            return JSON.stringify(this);
        },
        fromJSON: function (jsonPatient) {
            this = JSON.parse(jsonPatient)
        },
        getFullName: function () {
            return this.fname + " " + this.mname + " " + this.lname;
        },
        toObservable: function () {
            var observable = WinJS.Binding.define(this);
            return observable;
        }
    });

    var PatientObservable = WinJS.Class.mix(PatientModel, WinJS.Binding.dynamicObservableMixin);

    WinJS.Namespace.define("Models", {
        Patient: PatientObservable,
        PatentModel: PatientModel
    })
})()