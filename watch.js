module.exports = function(grunt){                                                   //Node module definition
grunt.loadNpmTasks(‘grunt-contrib-uglify’);                               // Plugins to be loaded
grunt.loadNpmTasks(‘grunt-contrib-watch’);


         grunt.initConfig({
       uglify: {
           my_target: {
                files: {
                'dest/output.min.js': ['src/**/*.js]
      }
    }
  }
                   
                  watch: {
          scripts: {
             files: '**/*.js',
             tasks: ['uglify']
          
           },
       },

});

};
