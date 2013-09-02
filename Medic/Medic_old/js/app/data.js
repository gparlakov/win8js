/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {

    var userData = function (user) {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
        else {
            return JSON.parse(localStorage.getItem("user"));
        }
        
    }

   

    var EverliveDataPersister = WinJS.Class.define(function (apiKey) {
        var everlive = new Everlive({
            apiKey: apiKey
        });

        this.users = new EverliveUsersPersister(everlive);

    }, {


    })

    var EverliveUsersPersister = WinJS.Class.define(function (context) {
        this.usersCtx = context.Users;
    }, {
        login: function (user, pass) {
            return this.usersCtx.login(user, pass).then(function (response) {
                userData(response.result);
            })
        },
        //register: function (user, pass, nick) {
        //    var displayName = {

        //    }


        //},
        getUsers: function () {
            return this.usersCtx.get();
        }

    });

    WinJS.Namespace.define("DataEverlive", {
        getPersister: function (apiKey) {
            return new EverliveDataPersister(apiKey);
        }

    })

}())