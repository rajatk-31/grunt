GRUNT JS

Grunt is a JavaScript task runner, a tool used to automatically perform frequently used tasks such as minification, compilation, unit testing, linting, etc. It uses a command-line interface to run custom tasks defined in a file (known as a Gruntfile). Grunt was created by Ben Alman and is written in Node.js. It is distributed via npm. Grunt has more than 5600+ plugins.


General Tasks:-

Minify:- Minify the code by removing the spaces and extra irrelative things.


Uglify:- Minify and changes the name of parameters and variables.

Concat:- Join to files or folders.

Copy:- copy content from one place to another.

Watch:- keep an eye on the changes in gulp files and implements them as soon as the file is saved without need to restart the server.

Live Server/ Connect:-  To create a static web server


What you need?

Node js/ NPM,
Grunt client (grunt-cli),
Grunt node package,
Grunt plugins,
Grunt configuration - JS file (gruntfile.js)










Installing grunt client

     	npm install -g grunt-cli

Installing grunt in project folder

	npm install grunt --save

Installing grunt plugins that are needed in project folder

	npm install grunt-contrib-copy --save
	npm install grunt-contrib-concat --save
	npm install grunt-contrib-watch --save             etc.


