module.exports = function(grunt){                                                   //Node module definition
         grunt.initConfig({
                  pkg: grunt.file.readJSON( ‘package.json ‘),                //Load all necessary modules
                           
                  copy: {                                                                        //Task
                          t1: {                                                                    // Target of task
                                   Src: ‘dir1/**’ ,               
                                   dest: ‘dir2/’
                           }
                   }
});

grunt.loadNpmTasks(‘grunt-contrib-copy’);                               // Plugins to be loaded

};

