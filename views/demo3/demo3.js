
var Observable = require("data/observable");
var frameModule = require("ui/frame");

function pageLoaded(args) {
  var page = args.object;
  var obj = new Observable.Observable();
  obj.set("isChecked", false);
  page.bindingContext = obj;
}

function goToDemo4() {
    console.log('goToDemo4 called');

    var topmost = frameModule.topmost();
    topmost.navigate("views/demo4/demo4");
};

exports.goToDemo4 = goToDemo4;
exports.pageLoaded = pageLoaded;