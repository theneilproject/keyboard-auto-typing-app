export const windowsCommands = [
  {
    name: 'task',
    commands: [
      {
        id: 2122,
        name: 'tasklist',
        command: 'tasklist | findstr "^{sthtask}"',
        detail: '현재 실행 중인 특정 프로세스 목록을 보여줍니다.'
      },
      {
        id: 2123,
        name: 'taskkill',
        command: 'taskkill /pid ^{sthtask}',
        detail: '특정 프로세스를 강제로 종료합니다.'
      }
    ]
  },
  {
    name: 'netstat',
    commands: [
      {
        id: 212211,
        name: '-ano',
        command: 'netstat -ano | findstr "^{sthport}"',
      }
    ]
  }
]
