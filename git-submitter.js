#!env node

var cp = require('child_process');
var inquirer = require('inquirer');
var branchName = require('current-git-branch');
var colors = require('colors');

var spawnSync = cp.spawnSync;

var commitMessageOption = require('./commit-message-option');
spawnSync('git', [
  'add',
  '.',
], { stdio: 'inherit' });

inquirer
  .prompt(commitMessageOption)
  .then(function (answers) {
    spawnSync('git', [
      'commit',
      '-am',
      answers.message
    ], { stdio: 'inherit' });
    console.log(colors.green('Successfully Commited!'));

    if (answers.push) {
      console.log('');
      spawnSync('git', [
        'push',
        'origin',
        branchName(),
      ], { stdio: 'inherit' });
      console.log(colors.green('Successfully Updated!'));
    }
  });