export const rhelCommands = [
  {
    name: 'fail2ban',
    commands: [
      {
        id: 142,
        name: 'status',
        command: 'sudo systemctl status fail2ban',
        detail: 'fail2ban 서비스 상태를 확인합니다.'
      },
      {
        id: 143,
        name: 'status sshd',
        command: 'sudo fail2ban-client status sshd',
        detail: 'sshd fail2ban 상태를 확인합니다.'
      },
      {
        id: 144,
        name: 'reload',
        command: 'sudo systemctl reload fail2ban',
        detail: 'fail2ban 서비스를 재시작합니다.'
      },
      {
        id: 145,
        name: 'stop',
        command: 'sudo systemctl stop fail2ban',
        detail: 'fail2ban 서비스를 중지합니다.'
      },
      {
        id: 146,
        name: 'start',
        command: 'sudo systemctl start fail2ban',
        detail: 'fail2ban 서비스를 시작합니다.'
      }
    ]
  }
]