exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.github.com',
      show: true,
      windowSize: '1200x900',
      waitForTimeout:50000
    }
  },
  include: {
   // github_homepagePage: './pages/Github_homepage.ts'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.ts',
  name: 'GithubCodeceptJs',
  require: ['ts-node/register']
}