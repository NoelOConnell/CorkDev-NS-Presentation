var application = require("application");



if (application.android){
    console.log("We are running on an Android device!");
}
else if (application.ios){
    console.log("We are running on an iOS device!");
}

application.start({ moduleName: "views/demo1/demo1" });
