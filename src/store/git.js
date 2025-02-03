const gitCommnad = [
  {
    name: 'git',
    commands: [
      {
        name: 'status',
        description: 'Show the working tree status',
        command: 'git status'
      },
      {
        name: 'add',
        description: 'Add file contents to the index',
        command: 'git add .'
      },
      {
        name: 'commit',
        description: 'Record changes to the repository',
        command: `git commit -am "^{message}"`
      },
      {
        name: 'push',
        description: 'Update remote refs along with associated objects',
        command: 'git push'
      },
      {
        name: 'push -set-upstream',
        description: 'Push the current branch and set the remote as upstream',
        command: 'git push --set-upstream origin ^{branch}'
      },
      {
        name: 'reset',
        description: 'Reset current HEAD to the specified state',
        command: 'git reset'
      }
    ]
  }
]