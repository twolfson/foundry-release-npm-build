// Load in dependencies
var expect = require('chai').expect;
var npmReleaseBuild = require('../');
var fixtureUtils = require('./utils/fixtures');

// Guarantee safeguards against exec are in place (see WARNING.md)
var childUtils = require('./utils/child-process');

// Define our test
var initialParams = {
  version: '0.1.0',
  message: 'Release 0.1.0',
  description: null
};
describe('Updating files', function () {
  describe('for a node module', function () {
    fixtureUtils.fixtureDir('npm-build');
    childUtils.shellExec.stub();
    before(function updateFiles (done) {
      npmReleaseBuild.updateFiles(initialParams, done);
    });

    it('builds the package', function () {
      expect(this.execStub.args).to.deep.equal([['npm run build']]);
    });
  });
});
