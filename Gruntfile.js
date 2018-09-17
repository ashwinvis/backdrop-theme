module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
          includePaths: ['bower_components/foundation/scss',
                         'bower_components/fontawesome/web-fonts-with-css/scss/',
                         'bower_components/academicons/css',
                         'bower_components/slick-carousel/slick/',
          ]
      },
      dist: {
        options: {
          //outputStyle: 'compressed',
          sourcemap: 'inline',
        },
        files: {
          'css/backdrop.css': 'scss/backdrop.scss'
        }
      }
    },

    cssmin: {
        options: {
            sourceMap: true
        },
        target: {
            files: [{
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/release',
                ext: '.min.css'
            }]
        }
    },
    copy: {
      font_awesome: {
          expand: true,
          flatten: true,
          src: ['bower_components/fontawesome/web-fonts-with-css/webfonts/*'],
          dest: 'fonts'
      },
      academicons: {
          expand: true,
          flatten: true,
          src: ['bower_components/academicons/fonts/*'],
          dest: 'fonts'
      },
      slick: {
          expand: true,
          flatten: true,
          src: ['bower_components/slick-carousel/slick/fonts/*'],
          dest: 'fonts'
      },
      slick_loader: {
          expand: true,
          flatten: true,
          src: ['bower_components/slick-carousel/slick/ajax-loader.gif'],
          dest: 'pelican-theme/static/'
      },
      js: {
          expand: true,
          flatten: true,
          src: ['bower_components/modernizr/modernizr.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/jquery/dist/jquery.min.map',
                'bower_components/foundation/js/foundation.min.js',
                'bower_components/slick-carousel/slick/slick.min.js',
          ],
          dest: 'js'
      },
      tipue: {
          expand: true,
          flatten: false,
          src: ['loader.gif'],
          dest: 'pelican-theme/static/'
      },
      pelican_css: {
          expand: true,
          flatten: true,
          src: ['css/release/*'],
          dest: 'pelican-theme/static/css'
      },
      pelican_js: {
          expand: true,
          flatten: true,
          // src: ['js/release/*'],  // gzip compressed
          src: ['js/*.js'],
          dest: 'pelican-theme/static/js'
      },
      pelican_fonts: {
        expand: true,
        flatten: true,
        src: ['fonts/*'],
        dest: 'pelican-theme/static/fonts'
      },
      pelican_html: {
          expand: true,
          flatten: true,
          src: ['html/*'],
          dest: 'pelican-theme/templates'
      },
      pelican_theme: {
          expand: true,
          flatten: true,
          src: ['theme-files-extra/*'],
          dest: 'pelican-theme/',
      }
    },
    // gzip assets 1-to-1 for production
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'js/',
        src: '*.js',
        dest: 'js/release',
        ext: '.js.gz',
        extDot: 'last'
      }
    },
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'copy']
      },

      html: {
        files: 'html/**/*.html',
        tasks: ['copy']
      },

      js: {
        files: 'js/**/*.js',
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
    
  grunt.registerTask('default', ['sass', 'cssmin', 'copy']) ;
  grunt.registerTask('serve', ['default','watch']);
}
