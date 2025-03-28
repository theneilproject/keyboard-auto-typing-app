export const ansibleCommands = [
  {
    name: 'ansible',
    commands: [
      {
        id: 152,
        name: 'test',
        command: 'ansible -m ping all',
        detail: '모든 호스트에 ping 모듈을 실행합니다.'
      },
      {
        id: 153,
        name: 'syntax-check',
        command: `ansible-playbook -i ^{inventory} ^{playbook} --syntax-check`,
        detail: 'ansible-playbook 문법을 검사합니다.'
      },
      {
        id: 154,
        name: 'check',
        command: `ansible-playbook -i ^{inventory} ^{playbook} --check`,
        detail: 'ansible-playbook을 실행하지 않고, 변경사항을 확인합니다.'
      },
      {
        id: 155,
        name: 'run',
        command: `ansible-playbook -i ^{inventory} ^{playbook}`,
        detail: 'ansible-playbook을 실행합니다.'
      },
      {
        id: 156,
        name: 'run tag',
        command: `ansible-playbook -i ^{inventory} ^{playbook} --tags ^{tag}`,
        detail: '특정 태그만 실행합니다.'
      }
    ]
  }
]