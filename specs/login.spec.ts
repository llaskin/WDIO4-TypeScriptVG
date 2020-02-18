var expect = require('chai').expect
import LoginPage from '../pages/login.page'
const { VisualGridRunner, Eyes, Target, By, MatchLevel, BatchInfo, BrowserType, ScreenOrientation, DeviceName, Configuration, ConsoleLogHandler } = require('@applitools/eyes.webdriverio');
// //const { Configuration, ConsoleLogHandler, FileLogHandler } = require('@applitools/eyes-selenium');
const concurrentSessions = 5;
const runner = new VisualGridRunner(concurrentSessions);
let eyes: typeof Eyes | null;
const viewPortWidth = 900;
const viewPortHeight = 600;

async function setupApplitools(appName: string, testName: string) {
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
    await eyes.setBatch(batchInfo);

    // await Util.Time.sleep(5000);
}

describe('login form', () => {
  before(async function () {
          await setupApplitools('Applitools Thin Monitor', 'ThinMonitor_Visual_Runner');
      });

          afterEach(async function () {
              await runner.getAllTestResults(false);
          });

          after(async function () {
              await eyes.abortIfNotClosed();
          });

    it('should should open', () => {
        LoginPage.open();

    });
});
