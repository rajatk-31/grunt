module.exports = function(grunt){                       
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 8000,
        hostname: '*',
        onCreateServer: function(server, connect, options) {
          var io = require('socket.io').listen(server);
          io.sockets.on('connection', function(socket) {
            // do something with socket 
          });
        }
      }
    }
  }
});

