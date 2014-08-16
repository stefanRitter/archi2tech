'use strict';

module.exports = function (grunt) {
  
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          paths: ['src/**/*']
        },
        files: {
          'dist/app.css': 'src/app.styl'
        }
      }
    },

    jade: {
      compile: {
        options: {
          client: false,
          pretty: false
        },
        files: [ {
          cwd: 'src/',
          src: 'index.jade',
          dest: 'dist',
          expand: true,
          ext: '.html'
        } ]
      }
    },

    concat: {
      options: {
        separator: '\n'
      },
      app: {
        src: [
          'bower_components/jquery/jquery.min.js',
          'bower_components/jquery-backstretch/jquery.backstretch.min.js',
          'src/app.js'
        ],
        dest: 'dist/app.js',
      }
    },

    watch: {
      styles: {
        files: ['src/**/*.styl'],
        tasks: ['stylus']
      },
      html: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
      },
      scripts: {
        files: [
          'src/**/*.js'
        ],
        tasks: ['concat']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['stylus', 'jade', 'concat']);
};
