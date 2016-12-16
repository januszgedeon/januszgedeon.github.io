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
    	},
	imagemin: {
    		dynamic: {
       			files: [{
           			expand: true,
            			cwd: 'images/',
            			src: ['**/*.{png,jpg,gif}'],
            			dest: 'images/build/'
       			}]
 		}
	},
	browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
	watch: {
    		scripts: {
        		files: ['style.sass'],
       			tasks: ['sass'],
        		options: {
            			spawn: false,
        		},
   		 } 
	}
});
 
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch'); 
grunt.loadNpmTasks('grunt-browser-sync');
grunt.registerTask('default', ['sass', 'imagemin', 'watch', 'browserSync']);

};       