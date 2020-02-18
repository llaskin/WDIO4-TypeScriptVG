"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../pages/login.page");
const { VisualGridRunner, Eyes, Target, By, MatchLevel, BatchInfo, BrowserType, ScreenOrientation, DeviceName, Configuration, ConsoleLogHandler } = require('@applitools/eyes.webdriverio');
const concurrentSessions = 5;
const runner = new VisualGridRunner(concurrentSessions);
let eyes;
const viewPortWidth = 900;
const viewPortHeight = 600;
function setupApplitools(appName, testName) {
    return __awaiter(this, void 0, void 0, function* () {
        const configuration = new Configuration();
        configuration.setAppName(appName);
        configuration.setTestName(testName);
        configuration.addBrowser(600, 900, BrowserType.CHROME);
        configuration.addBrowser(800, 600, BrowserType.CHROME);
        configuration.addBrowser(700, 500, BrowserType.CHROME);
        eyes = new Eyes(runner);
        eyes.setConfiguration(configuration);
        const k = 'Y7bRjY1ZkKKR9a4F1wCMNlBVyr1y6a23ckJo9I7ihQM110';
        eyes.setApiKey(k);
        let batchInfo = new BatchInfo('myFirstTest Test', null, null);
        yield eyes.setBatch(batchInfo);
    });
}
describe('login form', () => {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield setupApplitools('Applitools Thin Monitor', 'ThinMonitor_Visual_Runner');
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield runner.getAllTestResults(false);
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield eyes.abortIfNotClosed();
        });
    });
    it('should should open', () => {
        login_page_1.default.open();
    });
});
