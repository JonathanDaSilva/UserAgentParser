import * as YAML from "yamljs"
import * as chai from "chai"
import Device    from "./index"
import {Browser} from "./index"
var browsers = YAML.load('./src/browsers.yaml')

var deviceType  = ['mobile', 'tablet', 'desktop', 'console']
var osType      = ['windows', 'linux', 'mac', 'ios', 'android', 'blackberry', 'windowsphone', 'firefoxos']
var browserType = ['edge', 'ie', 'firefox', 'khtml', 'chrome', 'opera', 'safari', 'webkit']

for(let key in browsers) {
    describe(`${key}:  ${browsers[key].userAgent}`, ()=>{
        var expect = chai.expect
        var browser = <Browser>browsers[key]
        var device  = new Device(browser.userAgent)

        describe(`Device: ${browser.device}`, ()=>{
            for(let type of deviceType) {
                if(browser.device === type) {
                    it(`should be detect as ${type}`, ()=>{
                        expect(device[type]()).to.be.true
                    })
                } else {
                    it(`should not be detect as ${type}`, ()=>{
                        expect(device[type]()).to.be.false
                    })
                }
            }
        })

        describe(`OS: ${browser.os}`, ()=>{
            for(let type of osType) {
                if(browser.os === type) {
                    it(`should be detect as ${type}`, ()=>{
                        expect(device[type]()).to.be.true
                    })
                } else {
                    it(`should not be detect as ${type}`, ()=>{
                        expect(device[type]()).to.be.false
                    })
                }
            }
        })

        describe(`Browser: ${browser.name}`, ()=>{
            for(let type of browserType) {
                if(browser.name === type) {
                    it(`should be detect as ${type}`, ()=>{
                        expect(device[type]()).to.be.true
                    })
                } else {
                    it(`should not be detect as ${type}`, ()=>{
                        expect(device[type]()).to.be.false
                    })
                }
            }
        })
    })
}
