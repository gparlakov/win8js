/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () { 

    var postsList = new WinJS.Binding.List([]);

    var addPost = function (post) {
        postsList.push(Data.getPost(post.Content, post.Author));
    }

    var addPosts = function (response) {
        postsList.dataSource = [];

        var posts = JSON.parse(response);
        for (var i = 0; i < posts.length; i++) {
            addPost(posts[i]);
        }
    }

    var getPosts = function () {
        WinJS.xhr({
            url: "http://posted.apphb.com/api/posts",
            type: "GET",
            responseType: "json",
            data: {}
        })
        .done(function (data) {
            addPosts(data.response);            
        }, function (err) {
            debugger;
        })
    }
   
    WinJS.Utilities.markSupportedForProcessing(addPost);
    WinJS.Utilities.markSupportedForProcessing(addPosts);
    WinJS.Utilities.markSupportedForProcessing(getPosts);

    WinJS.Namespace.define("Data", {
        posts: postsList,
        addPost: addPost,
        getPosts: getPosts
    });
})();