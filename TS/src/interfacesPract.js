var chromeDriver = /** @class */ (function () {
    function chromeDriver() {
    }
    chromeDriver.prototype.setDriver = function () {
        throw new Error("Method not implemented.");
    };
    chromeDriver.prototype.closeDriver = function () {
        throw new Error("Method not implemented.");
    };
    chromeDriver.prototype.getDriver = function () {
        console.log('test');
    };
    ;
    return chromeDriver;
}());
var chrome = new chromeDriver();
chrome.getDriver();
