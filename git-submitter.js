#!env node

var cp = require('child_process');
var inquirer = require('inquirer');

var spawnSync = cp.spawnSync;

// spawnSync('git', ['add', '.']);

var commitMessageOption = require('./commit-message-option');

inquirer
  .prompt(commitMessageOption)
  .then(function (answers) {
    spawnSync('git', [
      'commit',
      '-am',
      answers.message
    ]);
  });