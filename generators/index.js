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

    }

});