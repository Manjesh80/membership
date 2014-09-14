/**
 * Created by Manjesh Gowda on 9/14/2014.
 */

module.exports = function(grunt){

    grunt.initConfig({
        jshint: {
            files : ['lib/**/*js', 'models/**/*','test/**/*js']
        },
        watch: {
            files : ['lib/**/*js', 'models/**/*','test/**/*js'],
            tasks : ['jshint']
        }
    })

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

}
