/// <reference path="vegitable.js" />
/// <reference path="mushroomMixin.js" />
/// <reference path="tomato.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

WinJS.Namespace.defineWithParent(Vegitables, "GMO", {
    TomatoGMO: WinJS.Class
        .mix(Vegitables.Tomato, Vegitables.Mixins.mushroomMixin)
});