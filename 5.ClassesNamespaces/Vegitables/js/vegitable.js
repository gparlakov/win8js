/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

WinJS.Namespace.define("Vegitables", {
    Vegitable: WinJS.Class.define(function (color, isDirectlyEatable) {
        this.color = color;
        this.isDirectlyEatable = isDirectlyEatable;
    })
});