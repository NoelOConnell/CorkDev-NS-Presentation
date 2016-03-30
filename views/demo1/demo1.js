var observable = require("data/observable");
var frameModule = require("ui/frame");

var viewModel = new observable.Observable();

function pageLoaded(args) {
    var page = args.object;
    
    viewModel.set("counter", 5);
    viewModel.set("message", viewModel.counter + " taps left");

    page.bindingContext = viewModel;
}

function tapAction() {
    viewModel.counter--;
    if (viewModel.counter <= 0) {
        viewModel.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    } else {
        viewModel.set("message", viewModel.counter + " taps left");
    }
}

function goToDemo2() {
    console.log('goToDemo2 called');

    var topmost = frameModule.topmost();
    topmost.navigate("views/demo2/demo2");
};

exports.pageLoaded = pageLoaded;
exports.tapAction = tapAction;
exports.goToDemo2 = goToDemo2;