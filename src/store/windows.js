export const windowsCommands = [
  {
    name: 'ssh',
    commands: [
      {
        id: 212211,
        name: 'ssh-keygen',
        command: 'ssh-keygen -t rsa -b 4096 -C "^{email}"',
        detail: 'SSH 키를 생성합니다.'
      }
    ]
  },
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
  },
  {
    name: 'net',
    commands: [
      {
        id: 212311,
        name: 'stop winnat',
        command: 'net stop winnat',
        detail: 'Windows NAT Driver를 중지합니다.(Error response from daemon: Ports are not available: bind: An attempt was made to access a socket in a way forbidden by its access permissions.) 에러 시'
      },
      {
        id: 212312,
        name: 'start winnat',
        command: 'net start winnat',
        detail: 'Windows NAT Driver를 시작합니다.'
      }
    ]
  }
]
