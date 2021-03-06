module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['src/**/*.js'],
      options: {
        globals: {
          _: false,
          $: false
        },
        browser: true,
        devel: true,
        reporterOutput: ""
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
      release: {
        files: [
          {expand: true, cwd: 'src',    src: ['**'],     dest: '../server/public', filter: 'isFile'},
          {expand: true, cwd: 'static', src: ['**'],     dest: '../server/public', filter: 'isFile'},
          {expand: true,                src: ['lib/**'], dest: '../server/public', filter: 'isFile'},
        ],
      },
    },



    clean: {
      release: {
        options: {force: true},
        src: ['../server/public'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('release', ['clean:release', 'copy:release']);
  grunt.registerTask('default', ['jshint','karma']);
};
