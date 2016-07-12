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
					'public_html/index.html': 'src/jade/views/index.jade',
					'public_html/prolotherapy.html': 'src/jade/views/prolotherapy.jade',
					'public_html/physiatry.html': 'src/jade/views/physiatry.jade',
					'public_html/approach.html': 'src/jade/views/approach.jade',
					'public_html/ailments.html': 'src/jade/views/ailments.jade',
					'public_html/drmeyer.html': 'src/jade/views/drmeyer.jade',
					'public_html/appointments.html': 'src/jade/views/appointments.jade',
					'public_html/contact.html': 'src/jade/views/contact.jade',
					'public_html/golfers.html': 'src/jade/views/golfers.jade',
					'public_html/runners.html': 'src/jade/views/runners.jade',
					'public_html/knees.html': 'src/jade/views/knees.jade',
					'public_html/shoulders.html': 'src/jade/views/shoulders.jade',
				}
		  	}
		},
		less: {
		  	compile: {
				options: {
					cleancss: true
				},
				files: {
				  'public_html/css/main.css': 'src/less/main.less' // destination file and source file
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