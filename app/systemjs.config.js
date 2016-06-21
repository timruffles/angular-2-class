/**
 * configures systemjs
 */
(function() {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    '@angular': 'node_modules/@angular',
    "traceur":"github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime":"github:jmcriffey/bower-traceur-runtime@0.0.87",
  };

  var packages = {
    'app': { main: 'main.js',  defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = {
      main: '/bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js',
    };
  });

  System.config({
    paths: {
      "github:*":"https://github.jspm.io/*.js"
    },
    map: map,
    packages: packages
  });

})();
