'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'connect': {
      demo: {
        options: {
          open: true,
          keepalive: true
        }
      }
    },

    'gh-pages': {
      options: {
        clone: 'bower_components/temp-clone'
      },
      src: [
        'bower_components/**/*',
        '!bower_components/temp-clone/**/*',
        'js/application.js', 'index.html',
        'css/application.css', 'CNAME'
      ]
    }
  });

  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);
};
