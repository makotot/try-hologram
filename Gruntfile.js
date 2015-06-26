module.exports = function (grunt) {

  require('jit-grunt')(grunt, {
    browserSync: 'grunt-browser-sync'
  });
  require('time-grunt')(grunt);

  grunt.initConfig({

    path: {
      src: './src',
      env: './dev'
    },

    clean: {
      all: ['<%= path.env %>']
    },

    assemble: {
      options: {
        layoutdir: '<%= path.src %>/layouts',
        partials: ['<%= path.src %>/partials/*.hbs'],
        helpers: [
          'handlebars-helper-repeat',
          'handlebars-helper-prettify'
        ],
        prettify: {
        }
      },
      all: {
        options: {
          layout: 'default.hbs'
        },
        files: [
          {
            expand: true,
            cwd: '<%= path.src %>/pages',
            src: '**/*.hbs',
            dest: '<%= path.env %>'
          }
        ]
      }
    },

    sass: {
      options: {
      },
      all: {
        files: [
          {
            expand: true,
            cwd: '<%= path.src %>/scss',
            src: '*.scss',
            dest: '<%= path.env %>/css',
            ext: '.css'
          }
        ]
      }
    },

    watch: {
      options: {
        spawn: false
      },
      html: {
        files: ['<%= path.src %>/**/*.hbs'],
        tasks: ['assemble']
      },
      css: {
        files: ['<%= path.src %>/scss/**/*.scss'],
        tasks: ['sass']
      }
    },

    browserSync: {
      all: {
        options: {
          watchTask: true,
          server: {
            baseDir: '<%= path.env %>'
          }
        },
        bsFiles: {
          src: [
            '<%= path.env %>/**/*.html',
            '<%= path.env %>/css/*.css'
          ]
        }
      }
    }
  });


  grunt.registerTask('default', ['clean']);
  grunt.registerTask('serve', ['clean', 'assemble', 'sass', 'browserSync', 'watch']);
};
