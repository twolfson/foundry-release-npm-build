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
    var fixtureDir = fixtureUtils.fixtureDir('npm-build');
    before(function updateFiles (done) {
      npmReleaseBuild.updateFiles(initialParams, done);
    });

    it('builds the package', function () {
      expect(JSON.parse(pkgJson)).to.have.property('version', '0.1.0');
    });
  });
});
