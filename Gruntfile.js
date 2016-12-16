module.exports = function (grunt) {

grunt.initConfig({
 sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.sass'
 }
      }
    }
});
 
grunt.loadNpmTasks('grunt-sass');
 
grunt.registerTask('default', ['sass']);

};       