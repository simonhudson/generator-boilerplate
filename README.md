# Yeoman Generator
This generator allows you to easily scaffold a front-end codebase, allowing for customisation of libraries and project configuration.

## Pre-requisites
* [Node](https://nodejs.org/en/download/)
* [Yeoman](http://yeoman.io/) `npm install -g yo`

## Important - where to locally store the Generator
Yeoman Generators need to be run from your global `node_modules` directory (e.g: `C:\Users\XXXXX\AppData\Roaming\npm\node_modules`)

In order to do this, you have two options

* Simply place the `generator-boilerplate` directory into this global `node_modules` directory

**OR**

* Place the `generator-boilerplate` directory wherever you want, open a `cmd`, navigate to the location of the folder and run `npm link`. This will create an alias in your global `node_modules` directory, pointing to wherever you've stored the `generator-boilerplate` directory

## How to run
* Open up a `cmd` prompt
* Navigate to the working directory of your project
* Run `yo boilerplate`

You will then be able to run through the Generator, configuring your project and choosing which libraries to include

## Starting your app
Once the Generator has successfully set up your codebase, simply run `gulp serve`, which will start an instance of Chrome and load your app.

The Gulp task will watch for changes to specified files in the `/src` directory, and will automatically run the necessary Gulp tasks and reload your browser. [Browsersync](https://www.browsersync.io) is also included so you can open your app in multiple browsers which will all reload as necessary.

## Running tests
As part of the Yeoman Generator, your project will have some sample Cucumber tests (running via the [Zombie](https://github.com/assaf/zombie) headless browser).

* Open up a `cmd` prompt
* Navigate to the working directory of your project
* Run `.\node_modules\.bin\cucumber-js`