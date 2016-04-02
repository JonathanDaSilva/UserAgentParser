"use strict";
var YAML = require("yamljs");
var chai = require("chai");
var index_1 = require("./index");
var browsers = YAML.load('./src/browsers.yaml');
var deviceType = ['mobile', 'tablet', 'desktop', 'console'];
var osType = ['windows', 'linux', 'mac', 'ios', 'android', 'blackberry', 'windowsphone', 'firefoxos'];
var browserType = ['edge', 'ie', 'firefox', 'khtml', 'chrome', 'opera', 'safari', 'webkit'];
var _loop_1 = function(key) {
    describe(key + ":  " + browsers[key].userAgent, function () {
        var expect = chai.expect;
        var browser = browsers[key];
        var device = new index_1.default(browser.userAgent);
        describe("Device: " + browser.device, function () {
            var _loop_2 = function(type) {
                if (browser.device === type) {
                    it("should be detect as " + type, function () {
                        expect(device[type]()).to.be.true;
                    });
                }
                else {
                    it("should not be detect as " + type, function () {
                        expect(device[type]()).to.be.false;
                    });
                }
            };
            for (var _i = 0, deviceType_1 = deviceType; _i < deviceType_1.length; _i++) {
                var type = deviceType_1[_i];
                _loop_2(type);
            }
        });
        describe("OS: " + browser.os, function () {
            var _loop_3 = function(type) {
                if (browser.os === type) {
                    it("should be detect as " + type, function () {
                        expect(device[type]()).to.be.true;
                    });
                }
                else {
                    it("should not be detect as " + type, function () {
                        expect(device[type]()).to.be.false;
                    });
                }
            };
            for (var _i = 0, osType_1 = osType; _i < osType_1.length; _i++) {
                var type = osType_1[_i];
                _loop_3(type);
            }
        });
        describe("Browser: " + browser.name, function () {
            var _loop_4 = function(type) {
                if (browser.name === type) {
                    it("should be detect as " + type, function () {
                        expect(device[type]()).to.be.true;
                    });
                }
                else {
                    it("should not be detect as " + type, function () {
                        expect(device[type]()).to.be.false;
                    });
                }
            };
            for (var _i = 0, browserType_1 = browserType; _i < browserType_1.length; _i++) {
                var type = browserType_1[_i];
                _loop_4(type);
            }
        });
    });
};
for (var key in browsers) {
    _loop_1(key);
}
