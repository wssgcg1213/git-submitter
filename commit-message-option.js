module.exports = [
  {
    type: 'list',
    name: 'message',
    message: 'Choose a commit message.',
    choices: [
      'feat: update',
      'fix: trouble shooting',
      'chore: publish',
      'docs: update README',
    ]
  },
  {
    type: 'confirm',
    name: 'push',
    message: 'Execute git push after commited?',
    default: true
  }
];