// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
            } else {
            }
            args.setPromise(WinJS.UI.processAll());
        }

        var getAllPostsBtn = document.getElementById("get-posts");
        getAllPostsBtn.addEventListener("click", function () {
            Data.getPosts();
        })

        var postCreate = document.getElementById("post-create");
        postCreate.addEventListener("click", function () {
            var content = document.getElementById("post-content").value;
            var author = document.getElementById("post-author").value;

            var data = JSON.stringify({
                Content: content,
                Author: author
            });

            WinJS.xhr({
                type: "POST",
                url: "http://posted.apphb.com/api/posts",
                data: data,
                headers: { "Content-type": "application/json" }
            }).done(function (response) {
                console.log(JSON.stringify(response))
            }, function (err) {
                console.log(err)

            });


            //WinJS.xhr({
            //    url: "http://posted.apphb.com/api/posts",
            //    type: "POST",
            //    data: data,
            //    headers: { "Content-type": "application/json" }
            //})

        })

        
    };

    app.oncheckpoint = function (args) {

    };

    app.start();
})();
