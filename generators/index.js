var generator = require('yeoman-generator');
var del = require('del');
var mkdir = require('mkdirp');

/**
    NOTES (in no particular order)

    * To create a method which won't be run automatically, prefix the method name with an underscore (e.g: _myMethod)

    * We use this.log (instead of console.log) as it ties the logging to the context of the generator.
        If we were to use a GUI, the logging would still be visible to the user (whereas console.log is not visible to a GUI user)

    * Generators run methods in a run loop. Any method created outside of one of these groups will be put in the 'default' group.
        The priority order is as follows:
        1. initializing - Your initialization methods (checking current project state, getting configs, etc)
        2. prompting - Where you prompt users for options (where you'd call this.prompt())
        3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
        4. default - If the method name doesn't match a priority, it will be pushed to this group.
        5. writing - Where you write the generator specific files (routes, controllers, etc)
        6. conflicts - Where conflicts are handled (used internally)
        7. install - Where installation are run (npm, bower)
        8. end - Called last, cleanup, say good bye, etc

**/

module.exports = generator.Base.extend({

    /**

    Utility functions

    **/

    _logSeparator: function() {
        this.log('\n-----------------------------\n');
    },

    _logLineBreak: function() {
        this.log('\n');
    },

    initializing: {

        greeting: function() {

            this._logSeparator();
            var message =
                '************************\n' +
                '*                      *\n' +
                '*  Setting up UI       *\n' +
                '*                      *\n' +
                '************************\n';
            this.log(message);
        },

        clean: function() {

            this.config.delete('useAngular');
            this.config.delete('useBootstrap');
            this.config.delete('useJquery');

            var done = this.async(),
                self = this;
            
            del(this.destinationPath() + '/**/*', function() {
                del(
                    [
                        self.destinationPath() + '/.yo-rc.json',
                        self.destinationPath() + '/.gitignore',
                        self.destinationPath() + '/.sass-cache'
                    ], function() {
                    self.config.save();
                    done();
                });
            });

        }

    },

    prompting: {

        projectSetup: function() {
            var done = this.async();
            this.prompt({
                type    : 'input',
                name    : 'name',
                message : 'Your project name',
                default : this.appname // Default to current folder name
            }, function(data) {
                this.config.set({'projectName' : data.name });
                var projectNameSlug = this.config.get('projectName');
                    projectNameSlug = projectNameSlug.replace(/\s+/g, '-');
                    projectNameSlug = projectNameSlug.toLowerCase();
                this.config.set('projectNameSlug', projectNameSlug);

                done();
            }.bind(this));
        },

        endSetup: function() {
            this._logLineBreak();
            this.log('Setting up "' + this.config.get('projectName') + '"');
            this._logSeparator();
        }

    },

    configuring: {

        setDirs: function() {

            var dirs = {
                'template_css'          : this.templatePath() + '\\css\\',
                'template_gulp'         : this.templatePath() + '\\gulp\\',
                'template_imgs'         : this.templatePath() + '\\imgs\\',
                'template_js'           : this.templatePath() + '\\js\\',
                'template_layout'       : this.templatePath() + '\\layout\\',
                'template_libs'         : this.templatePath() + '\\libs\\',
                'template_pages'        : this.templatePath() + '\\pages\\',
                'template_tests'        : this.templatePath() + '\\tests\\',

                'dest_root'             : this.destinationPath(),
                'dest_app'              : this.destinationPath() + '\\app\\',
                'dest_assets'           : this.destinationPath() + '\\app\\assets\\',
                'dest_includes'         : this.destinationPath() + '\\app\\includes\\',
                'dest_layout'           : this.destinationPath() + '\\app\\layout\\',

                'src_root'              : this.destinationPath() + '\\src\\',
                'src_assets'            : this.destinationPath() + '\\src\\assets\\',
                'src_bower_components'  : this.destinationPath() + '\\bower_components\\',
                'src_controllers'       : this.destinationPath() + '\\src\\assets\\js\\controllers\\',
                'src_css'               : this.destinationPath() + '\\src\\assets\\css\\',
                'src_html'              : this.destinationPath() + '\\src\\html\\',
                'src_imgs'              : this.destinationPath() + '\\src\\assets\\imgs\\',
                'src_js'                : this.destinationPath() + '\\src\\assets\\js\\',
                'src_views'             : this.destinationPath() + '\\src\\views\\'
            };

            for (var i in dirs) {
                this.config.set(i, dirs[i]);
                mkdir(this.config.get(i));
            }

        },

    },

    writing: {

        initialFiles: function() {
            this.fs.write(this.config.get('dest_root') + '/README.md', '# ' + this.config.get('projectName'));
            this.fs.write(
                this.config.get('dest_root') + '/.gitignore',
                    'node_modules\n' +
                    '.sass-cache\n' +
                    'bower_components\n' +
                    'app\n' +
                    '.yo-rc.json'
                );
        }

    }

});