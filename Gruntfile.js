module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            styles: {
                files: [
                    {
                        expand: true,
                        src: ['public/**/*.scss'],
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            styles: {
                files: [
                    "public/**/*.scss"
                ],
                tasks: ['newer:sass']
            }
        }
    });

    grunt.registerTask('dev', ['sass', 'watch']);
    grunt.registerTask('default', ['sass']);
};
