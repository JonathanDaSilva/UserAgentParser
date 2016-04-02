"use strict";
var Device = (function () {
    function Device(userAgent) {
        this.ua = userAgent.toLowerCase();
    }
    Device.parse = function (userAgent) {
        var device = new Device(userAgent);
        return {
            userAgent: userAgent,
            device: device.device(),
            os: '',
            name: '',
            vers: '',
        };
    };
    Device.prototype.find = function (search) {
        return this.ua.indexOf(search) !== -1;
    };
    // Device Type
    Device.prototype.device = function () {
        if (this.mobile())
            return 'mobile';
        if (this.tablet())
            return 'tablet';
        if (this.desktop())
            return 'desktop';
        if (this.console())
            return 'console';
    };
    Device.prototype.mobile = function () {
        return (this.find('mobile') ||
            this.find('mobi/') ||
            this.find('iphone')) && !this.find('ipad');
    };
    Device.prototype.tablet = function () {
        return (this.android() ||
            this.find('tablet') ||
            this.find('ipad') ||
            this.find('kindle')) && !this.mobile();
    };
    Device.prototype.desktop = function () {
        return (this.windows() ||
            this.linux() ||
            this.mac());
    };
    Device.prototype.console = function () {
        return (this.find('xbox') ||
            this.find('wii') ||
            this.find('playstation'));
    };
    // OPERATING SYSTEM
    Device.prototype.os = function () {
        if (this.windows())
            return 'windows';
        if (this.linux())
            return 'linux';
        if (this.mac())
            return 'mac';
        if (this.ios())
            return 'ios';
        if (this.android())
            return 'android';
        if (this.blackberry())
            return 'blackberry';
        if (this.windowsphone())
            return 'windowsphone';
        if (this.firefoxos())
            return 'firefoxos';
    };
    Device.prototype.windows = function () {
        return (this.find('windows nt') &&
            !this.console());
    };
    Device.prototype.linux = function () {
        return (this.find('linux') &&
            !this.mobile() &&
            !this.tablet());
    };
    Device.prototype.mac = function () {
        return (this.find('mac') &&
            !this.ios());
    };
    Device.prototype.ios = function () {
        return (this.find('iphone') ||
            this.find('ipad') ||
            this.find('ipod'));
    };
    Device.prototype.android = function () {
        return (this.find('android') ||
            this.find('kindle') ||
            (this.mobile() &&
                this.find('linux')));
    };
    Device.prototype.blackberry = function () {
        return (this.find('blackberry') ||
            this.find('rim') ||
            this.find('bb10'));
    };
    Device.prototype.windowsphone = function () {
        return this.find('windows phone');
    };
    Device.prototype.firefoxos = function () {
        return (this.find('(mobile;') ||
            this.find('(tablet;'));
    };
    // BROWSER
    Device.prototype.browser = function () {
        if (this.ie())
            return 'IE';
        if (this.edge())
            return 'edge';
        if (this.firefox())
            return 'firefox';
        if (this.khtml())
            return 'khtml';
        if (this.chrome())
            return 'chrome';
        if (this.opera())
            return 'opera';
        if (this.safari())
            return 'safari';
        if (this.webkit())
            return 'webkit';
    };
    Device.prototype.ie = function () {
        return (this.find('msie') ||
            this.find('trident'));
    };
    Device.prototype.edge = function () {
        return this.find('edge');
    };
    Device.prototype.firefox = function () {
        return (!this.ie() &&
            !this.opera() &&
            this.find('firefox'));
    };
    Device.prototype.khtml = function () {
        return this.find('khtml/');
    };
    Device.prototype.chrome = function () {
        return (this.find('chrome') &&
            !this.opera() &&
            !this.edge());
    };
    Device.prototype.opera = function () {
        return (this.find('opr') ||
            this.find('presto') ||
            this.find('opera mobi'));
    };
    Device.prototype.safari = function () {
        return (!this.chrome() &&
            !this.opera() &&
            !this.edge() &&
            !this.android() &&
            this.find('safari'));
    };
    Device.prototype.webkit = function () {
        return (!this.ie() &&
            !this.safari() &&
            !this.firefox() &&
            !this.khtml() &&
            !this.chrome() &&
            !this.opera() &&
            !this.edge());
    };
    return Device;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Device;
