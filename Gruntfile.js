module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        customizeBootstrap: {
            build:{
                options: {
                    src: 'src/styles/bootstrap/',
                    dest: 'src/styles'
                }
            }
        },
        less: {
            bootstrap: {
                options: {
                    paths: ["src/styles/"]
                },
                files: {
                    "dist/css/ualib-bootstrap.css": "src/styles/bootstrap.less"
                }
            },
            styleguide: {
                options: {
                    paths: ["src/styleguide-template/public"]
                },
                files: {
                    "styleguide/public/ualib-styleguide.css": "src/styleguide-template/public/ualib-styleguide.less"
                }
            }
        },
        exec: {
            kss: {
                command: 'kss-node src/styles --template src/styleguide-template'
            }
        }
    });

    grunt.loadNpmTasks('grunt-customize-bootstrap');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-styleguide');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['customizeBootstrap', 'less:bootstrap', 'exec', 'less:styleguide']);
};