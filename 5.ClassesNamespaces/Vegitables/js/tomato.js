/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

WinJS.Namespace.define("Vegitables", {
    Tomato: WinJS.Class.derive(Vegitables.Vegitable, function (radius) {
        Vegitables.Vegitable.apply(this,["red", true]);
        this.radius = radius;
    })
})