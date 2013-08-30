/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
WinJS.Namespace.define("Utility", {
    Repeater: WinJS.Class.define(function (collection, templatePath, element) {
        var observable = WinJS.Binding.as(collection);
        if (!element) {
            element = null;
        }
        var template = new WinJS.Binding.Template(null, { href: templatePath });

        this.render = function () {
            //var fragment = document.createDocumentFragment();
            
            for (var i = 0; i < observable.length; i++) {
                var div = document.createElement('div');
                template.render(observable[i], div).done();
                element.appendChild(div);
            }
        }
    }, {
    }, {}),
    Vegitable: WinJS.Class.define(function (name, color) {
        this.name = name;
        this.color = color;
    })

});