'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactFoundationAppsGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the React Foundation Apps generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('client');
      this.dest.mkdir('client/img');
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.template('Gemfile', 'Gemfile');
      this.template('webpack.config.js', 'webpack.config.js');
      this.template('gulpfile.js', 'gulpfile.js');
      this.directory('client', 'client');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('editorconfig', '.editorconfig');
    },
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = ReactFoundationAppsGenerator;
