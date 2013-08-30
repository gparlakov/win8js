(function () {

    //var ObservableComputer = WinJS.Binding.define(computer);
    var firstComputerObservable = Data.getComputer("Dell Studio 1535", 2000, "images\logo.png", "Core i5", 2.0, "Dell");
    var secondComputerObservable = Data.getComputer("HP 650", 1500, "images\logo.png", "Intel 1000M", 1.8, "HP");
    var thirdComputerObservable = Data.getComputer("ASsusss", 1500, "images\logo.png", "Intel 1000M", 1.8, "Asus");
    var fourthComputerObservable = Data.getComputer("Lenovo0", 1500, "images\logo.png", "Intel 1000M", 1.8, "Lenovo");

    var computersList = new WinJS.Binding.List(
        [firstComputerObservable,
        secondComputerObservable,
        thirdComputerObservable,
        fourthComputerObservable]);

    var addComputer = function (computer) {
        //var oservablePc = new Data.getComputer(
        //    computer.name, computer.price, computer.imageUrl,
        //    computer.processor.modelName, computer.processor.frequencyGHz, manufacturer);

        computersList.push(computer);
    }
    
    var log = function (event) {
        var triggeringListView = this.winControl;

        triggeringListView.selection.getItems().then(function (items) {
            console.log("Selected Items: ");
            items.forEach(function (item) {
                console.log(JSON.stringify(item.data));
            });
        });

        itemIndices = triggeringListView.selection.getIndices();
        console.log("Selected Item Indices: ");
        console.log(itemIndices.join(", "));

        //console.log(selection);
    }


    WinJS.Utilities.markSupportedForProcessing(addComputer);
    WinJS.Utilities.markSupportedForProcessing(log);

    WinJS.Namespace.define("Data", {
        computers: computersList,
        addComputer: addComputer,
        groupBy: "fdfdf",
        log: log
    });
})();