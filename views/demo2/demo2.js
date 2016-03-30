var app = require("application");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var platformModule = require("platform");
var color = require("color");
var frameModule = require("ui/frame");

var users = [{
    name: 'John'
}, {
    name: 'Dave'
}, {
    name: 'Michael'
}, {
    name: 'Lisa'
}, {
    name: 'Aoife'
}, {
    name: 'Stephen'
}];
var viewModel = new Observable({
    users: new ObservableArray(users)
});

function pageLoaded(args) {
    var page = args.object;
    // Change statusbar color on Lollipop

    if (app.android && platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new color.Color("#1976D2").android);
    }
    page.bindingContext = viewModel;
    loadItems();
}
exports.pageLoaded = pageLoaded;

function loadItems() {
    return new Promise(function(resolve, reject) {
        try {
            (20).times(function(i) {
                var item = users[Math.floor(Math.random() * users.length)];
                viewModel.users.unshift(item);
            });
            resolve("great success");

        } catch (ex) {
            reject(ex);
        }
    });
}

function refreshList(args) {

    var pullRefresh = args.object;

    loadItems().then(function(response) {
        console.log(response);
        // ONLY USING A TIMEOUT TO SIMULATE/SHOW OFF THE REFRESHING
        setTimeout(function() {
            pullRefresh.refreshing = false;
        }, 1000);
    }, function(err) {
        pullRefresh.refreshing = false;
        alert(err);
    });
}

exports.goToDemo3 = function() {
    console.log('goToDemo3 called');

    var topmost = frameModule.topmost();
    topmost.navigate("views/demo3/demo3");
};

exports.refreshList = refreshList;

Number.prototype.times = function(func) {
    for (var i = 0; i < Number(this); i++) {
        func(i);
    }
}