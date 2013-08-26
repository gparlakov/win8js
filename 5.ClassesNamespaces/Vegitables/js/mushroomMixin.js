/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
WinJS.Namespace.defineWithParent(Vegitables, "Mixins", {
    mushroomMixin: {
        grow: function (waterAmmount, size) {
            this.size += waterAmmount;
        }
    }
})