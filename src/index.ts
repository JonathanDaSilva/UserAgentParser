export interface Browser {
    userAgent: string
    device:    string
    os:        string
    name:      string
}

export default class Device {
    public static parse(userAgent: string): Browser {
        var device = new Device(userAgent)
        return {
            userAgent: userAgent,
            device:    device.device(),
            os:        device.os(),
            name:      device.browser(),
        }
    }

    public ua: string
    public constructor(userAgent: string) {
        this.ua = userAgent.toLowerCase()
    }

    private find(search: string) {
        return this.ua.indexOf(search) !== -1
    }

    // Device Type
    public device(): string {
        if(this.mobile())
            return 'mobile'
        if(this.tablet())
            return 'tablet'
        if(this.desktop())
            return 'desktop'
        if(this.console())
            return 'console'
    }

    public mobile(): boolean {
        return (
            this.find('mobile') ||
            this.find('mobi/') ||
            this.find('iphone')
        ) && !this.find('ipad')
    }

    public tablet(): boolean {
        return (
            this.android()      ||
            this.find('tablet') ||
            this.find('ipad')   ||
            this.find('kindle')
        ) && !this.mobile()
    }

    public desktop(): boolean {
        return (
            this.windows() ||
            this.linux()   ||
            this.mac()
        )
    }

    public console(): boolean {
        return (
            this.find('xbox') ||
            this.find('wii') ||
            this.find('playstation')
        )
    }

    // OPERATING SYSTEM
    public os(): string {
        if(this.windows())
            return 'windows'
        if(this.linux())
            return 'linux'
        if(this.mac())
            return 'mac'
        if(this.ios())
            return 'ios'
        if(this.android())
            return 'android'
        if(this.blackberry())
            return 'blackberry'
        if(this.windowsphone())
            return 'windowsphone'
        if(this.firefoxos())
            return 'firefoxos'
    }

    public windows(): boolean {
        return (
            this.find('windows nt') &&
            !this.console()
        )
    }

    public linux(): boolean {
        return (
            this.find('linux') &&
            !this.mobile() &&
            !this.tablet()
        )
    }

    public mac(): boolean {
        return (
            this.find('mac') &&
            !this.ios()
        )
    }

    public ios(): boolean {
        return (
            this.find('iphone') ||
            this.find('ipad')   ||
            this.find('ipod')
        )
    }

    public android(): boolean {
        return (
            this.find('android') ||
            this.find('kindle')  ||
            (
                this.mobile() &&
                this.find('linux')
            )
        )
    }

    public blackberry(): boolean {
        return (
            this.find('blackberry') ||
            this.find('rim') ||
            this.find('bb10')
        )
    }

    public windowsphone(): boolean {
        return this.find('windows phone')
    }

    public firefoxos(): boolean {
        return (
            this.find('(mobile;') ||
            this.find('(tablet;')
        )
    }

    // BROWSER
    public browser(): string {
        if(this.ie())
            return 'IE'
        if(this.edge())
            return 'edge'
        if(this.firefox())
            return 'firefox'
        if(this.khtml())
            return 'khtml'
        if(this.chrome())
            return 'chrome'
        if(this.opera())
            return 'opera'
        if(this.safari())
            return 'safari'
        if(this.webkit())
            return 'webkit'
    }

    public ie(): boolean {
        return (
            this.find('msie') ||
            this.find('trident')
        )
    }

    public edge(): boolean {
        return this.find('edge')
    }

    public firefox(): boolean {
        return (
            !this.ie() &&
            !this.opera() &&
            this.find('firefox')
        )
    }

    public khtml(): boolean {
        return this.find('khtml/')
    }

    public chrome(): boolean {
        return (
            this.find('chrome') &&
            !this.opera() &&
            !this.edge()
        )
    }

    public opera(): boolean {
        return (
            this.find('opr')    ||
            this.find('presto') ||
            this.find('opera mobi')
        )
    }

    public safari(): boolean {
        return (
            !this.chrome()  &&
            !this.opera()   &&
            !this.edge()    &&
            !this.android() &&
            this.find('safari')
        )
    }

    public webkit(): boolean {
        return (
            !this.ie()      &&
            !this.safari()  &&
            !this.firefox() &&
            !this.khtml()   &&
            !this.chrome()  &&
            !this.opera()   &&
            !this.edge()
        )
    }
}
