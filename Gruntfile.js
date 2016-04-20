module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	// Project configuration.
	grunt.initConfig({
		jade: {
		  	compile: {
				options: {
					pretty: true,
				},
				files: {
					'dist/index.html': 'src/jade/views/index.jade',
					'dist/prolotherapy.html': 'src/jade/views/prolotherapy.jade',
					'dist/physiatry.html': 'src/jade/views/physiatry.jade',
					'dist/approach.html': 'src/jade/views/approach.jade',
					'dist/ailments.html': 'src/jade/views/ailments.jade',
					'dist/about.html': 'src/jade/views/about.jade',
					'dist/appointments.html': 'src/jade/views/appointments.jade',
					'dist/contact.html': 'src/jade/views/contact.jade',
				}
		  	}
		},
		less: {
		  	compile: {
				options: {
					cleancss: true
				},
				files: {
				  'dist/css/main.css': 'src/less/main.less' // destination file and source file
				}
		  	}
		},
		watch: {
			grunt: { 
				files: ['Gruntfile.js'] 
			},
			jade: {
				files: ['src/jade/**/*.jade'],
				tasks: ['jade']
			},
			styles: {
				files: ['src/less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
				  spawn: false
				}
			}
		}
	});
  
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade']);
	grunt.registerTask('default','Compile Jade & Less', ['jade','less','watch']);

};