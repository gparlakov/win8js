(function () {
    var post = {
        content: "",
        author: "",        
    }

    var ObservablePost = WinJS.Binding.define(post);

    WinJS.Namespace.define("Data", {
        getPost: function (content, author) {
            return new ObservablePost({
                content: content,
                author: author,
            });
        }
    });
})();