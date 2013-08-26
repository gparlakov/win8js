/// <reference path="cucumber.js" />
/// <reference path="vegitable.js" />
/// <reference path="mushroomMixin.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

WinJS.Namespace.defineWithParent(Vegitables, "GMO", {
    CucumberGMO: WinJS.Class
        .mix(Vegitables.Cucumber, Vegitables.Mixins.mushroomMixin)
});