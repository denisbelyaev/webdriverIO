/*
 http://kaktusfresh2.wix.com/travelgidepeople
 http://kaktusfresh1.wix.com/travechanel
 http://kaktusfresh.wix.com/lifedev

 */

var webdriverio = require('webdriverio');
var options1 = {
    desiredCapabilities: {
        browserName: 'firefox',
        maxInstances: 4
    }
};

var options2= {
    desiredCapabilities: {
        browserName: 'chrome',
        maxInstances: 4
    }
};

var i = 0;

//setInterval(function() {
//    webdriverio
//        .remote(options1)
//        .init()
//        .url('http://kaktusfresh2.wix.com/travelgidepeople')
//        .click('#comp-in039xv2link')
//        .pause(14000).then(function() {
//            i++;
//            console.log(i);
//        })
//        .end();
//}, 15000)


//setInterval(function() {
//    webdriverio
//        .remote(options2)
//        .init()
//        .url('http://kaktusfresh1.wix.com/travechanel')
//        .click('#comp-in02z180link')
//        .pause(18000).then(function() {
//            i++;
//            console.log(i);
//        })
//        .end();
//}, 60000);


//реклама хром 1
setInterval(function() {
    webdriverio
        .remote(options2)
        .init()
        .url('https://www.youtube.com/watch?v=Hy2Mk456OCw')
        .pause(27000).then(function() {
            console.log(process.memoryUsage());
            this.click('.image-container a');

            i++;
            console.log(i);
        })
        .pause(30000).then(function() {
            this.end();
        })

}, 30000);

//setInterval(function() {
//    webdriverio
//        .remote(options2)
//        .init()
//        .url('https://www.youtube.com/watch?v=Hy2Mk456OCw')
//        .pause(19000).then(function() {
//            this.click('.image-container a');
//
//            i++;
//            console.log(i);
//        })
//        .pause(10000).then(function() {
//        this.end();
//    })
//
//}, 35000);


////реклама хром 2
//setInterval(function() {
//    webdriverio
//        .remote(options1)
//        .init()
//        .url('https://www.youtube.com/watch?v=7o5NLST5kJA')
//        .pause(9000).then(function() {
//            //console.log('ID ' + process.pid);
//            console.log(process.memoryUsage());
//
//            this.click('.image-container a');
//
//            i++;
//            console.log(i);
//        })
//        .pause(7000).then(function() {
//        this.end();
//
//        })
//},5000);


