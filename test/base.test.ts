
//const pjr = require('pactum-json-reporter');

const pjr = require('../pactumReporter.js')

const { reporter } = require('pactum');
// name of the report file - defaults to "report.json"
pjr.file = 'PactumReport.json';

// folder path for the report file - defaults to "./reports"
pjr.path = './TestReport';


// global before block
before(function() {    
  reporter.add(pjr);
});

beforeEach(function(){
  console.log(this._runnable.title);
  pjr.testTitle = formatTestTitle(this.test.title)
})


// global after block
after(async () => {
  await reporter.end();
});


function formatTestTitle(title:string) {
  const regex = /^"before each" hook for "(.*)"$/;
  const match = regex.exec(title);
  return match ? match[1] : title;
}