var fs = require('fs');
var shell = require('shelljs');

exports.specVersion = '1.1.0';

exports.updateFiles = function (params, cb) {
  // If we have a package.json
  if (shell.test('-f', 'package.json')) {
    // Load it up
    var pkgJson = fs.readFileSync('package.json', 'utf8');
    var pkg = JSON.parse(pkgJson);

    // If there is a build script, run it
    if (pkg.scripts && pkg.scripts.build) {
      shell.exec('npm run build');
    }
  }

  // Callback
  process.nextTick(cb);
};
