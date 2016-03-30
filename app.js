var application = require("application");
application.start({ moduleName: "views/demo1/demo1" });



if (application.android){
    console.log("We are running on an Android device!");
}
else if (app.ios){
    console.log("We are running on an iOS device!");
}