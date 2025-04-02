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
  },
  {
    name: 'firewalld',
    commands: [
      {
        id: 1411,
        name: 'list',
        command: 'sudo firewall-cmd --list-all',
        detail: '현재 방화벽 설정을 확인합니다.'
      },
      {
        id: 14111,
        name: 'list --zone',
        command: `sudo firewall-cmd --zone=^{zone} --list-all`,
        detail: '특정 zone의 방화벽 설정을 확인합니다.'
      },
      {
        id: 14112,
        name: 'add port',
        command: `sudo firewall-cmd --permanent --zone=^{zone} --add-port=^{port}/tcp`,
        detail: '특정 zone에 tcp 포트를 추가합니다.'
      },
      {
        id: 14123,
        name: 'remove port',
        command: `sudo firewall-cmd --permanent --zone=^{zone} --remove-port=^{port}/tcp`,
        detail: '특정 zone에 tcp 포트를 제거합니다.'
      },
      {
        id: 14124,
        name: 'add service',
        command: `sudo firewall-cmd --permanent --zone=^{zone} --add-service=^{service}`,
        detail: '특정 zone에 서비스를 추가합니다.'
      },
      {
        id: 14125,
        name: 'remove service',
        command: `sudo firewall-cmd --permanent --zone=^{zone} --remove-service=^{service}`,
        detail: '특정 zone에 서비스를 제거합니다.'
      },
      {
        id: 14126,
        name: 'add rich rule',
        command: `sudo firewall-cmd --permanent --zone=^{zone} --add-rich-rule='rule family=ipv4 source address=^{ip} accept'`,
        detail: '특정 zone에 ip 주소를 추가합니다.'
      },
      {
        id: 14127,
        name: 'remove rich rule',
        command: `sudo firewall-cmd --permanent --zone=^{zone} --remove-rich-rule='rule family=ipv4 source address=^{ip} accept'`,
        detail: '특정 zone에 ip 주소를 제거합니다.'
      },
      {
        id: 14128,
        name: 'reload',
        command: 'sudo firewall-cmd --reload',
        detail: 'firewalld 설정을 재시작합니다.'
      },
      {
        id: 1421,
        name: 'system status',
        command: 'sudo systemctl status firewalld',
        detail: 'firewalld 서비스 상태를 확인합니다.'
      },
      {
        id: 1431,
        name: 'system reload',
        command: 'sudo systemctl reload firewalld',
        detail: 'firewalld 서비스를 재시작합니다.'
      },
      {
        id: 1441,
        name: 'system stop',
        command: 'sudo systemctl stop firewalld',
        detail: 'firewalld 서비스를 중지합니다.'
      },
      {
        id: 1451,
        name: 'system start',
        command: 'sudo systemctl start firewalld',
        detail: 'firewalld 서비스를 시작합니다.'
      },
    ]
  },
  {
    name: 'nftables',
    commands: [
      {
        id: 1411,
        name: 'list',
        command: 'sudo nft list ruleset',
        detail: '현재 nftables 설정을 확인합니다.'
      },
      {
        id: 14112,
        name: 'add rule',
        command: `sudo nft add rule ip filter input tcp dport ^{port} accept`,
        detail: '특정 포트를 허용하는 규칙을 추가합니다.'
      },
      {
        id: 14113,
        name: 'remove rule',
        command: `sudo nft delete rule ip filter input tcp dport ^{port} accept`,
        detail: '특정 포트를 허용하는 규칙을 제거합니다.'
      },
      {
        id: 14114,
        name: 'flush ruleset',
        command: 'sudo nft flush ruleset',
        detail: '모든 규칙을 삭제합니다.'
      },
      {
        id: 14115,
        name: 'add chain',
        command: `sudo nft add chain ip filter ^{chain} { type filter hook input priority 0; }`,
        detail: '특정 체인을 추가합니다.'
      },
      {
        id: 14116,
        name: 'remove chain',
        command: `sudo nft delete chain ip filter ^{chain}`,
        detail: '특정 체인을 제거합니다.'
      },
      {
        id: 14117,
        name: 'add table',
        command: `sudo nft add table ip ^{table}`,
        detail: '특정 테이블을 추가합니다.'
      },
      {
        id: 14118,
        name: 'remove table',
        command: `sudo nft delete table ip ^{table}`,
        detail: '특정 테이블을 제거합니다.'
      },
      {
        id: 14119,
        name: 'add set',
        command: `sudo nft add set ip filter ^{set} { type ipv4_addr; }`,
        detail: '특정 셋을 추가합니다.'
      },
      {
        id: 14120,
        name: 'remove set',
        command: `sudo nft delete set ip filter ^{set}`,
        detail: '특정 셋을 제거합니다.'
      },
      {
        id: 14121,
        name: 'add map',
        command: `sudo nft add map ip filter ^{map} { type ipv4_addr : counter; }`,
        detail: '특정 맵을 추가합니다.'
      },
      {
        id: 14122,
        name: 'remove map',
        command: `sudo nft delete map ip filter ^{map}`,
        detail: '특정 맵을 제거합니다.'
      },
      {
        id: 14123,
        name: 'add element',
        command: `sudo nft add element ip filter ^{set} { ^{ip} }`,
        detail: '특정 셋에 요소를 추가합니다.'
      },
      {
        id: 14124,
        name: 'remove element',
        command: `sudo nft delete element ip filter ^{set} { ^{ip} }`,
        detail: '특정 셋에서 요소를 제거합니다.'
      },
      {
        id: 14125,
        name: 'flush table',
        command: `sudo nft flush table ip ^{table}`,
        detail: '특정 테이블을 삭제합니다.'
      },
      {
        id: 14126,
        name: 'flush chain',
        command: `sudo nft flush chain ip filter ^{chain}`,
        detail: '특정 체인을 삭제합니다.'
      },
      {
        id: 14127,
        name: 'flush set',
        command: `sudo nft flush set ip filter ^{set}`,
        detail: '특정 셋을 삭제합니다.'
      },
      {
        id: 14128,
        name: 'flush map',
        command: `sudo nft flush map ip filter ^{map}`,
        detail: '특정 맵을 삭제합니다.'
      },
      {
        id: 14129,
        name: 'add rule with set',
        command: `sudo nft add rule ip filter input ip saddr @^{set} accept`,
        detail: '특정 셋을 사용하여 규칙을 추가합니다.'
      },
      {
        id: 14130,
        name: 'remove rule with set',
        command: `sudo nft delete rule ip filter input ip saddr @^{set} accept`,
        detail: '특정 셋을 사용하여 규칙을 제거합니다.'
      },
      {
        id: 14131,
        name: 'add rule with map',
        command: `sudo nft add rule ip filter input ip saddr @^{map} accept`,
        detail: '특정 맵을 사용하여 규칙을 추가합니다.'
      },
      {
        id: 14132,
        name: 'remove rule with map',
        command: `sudo nft delete rule ip filter input ip saddr @^{map} accept`,
        detail: '특정 맵을 사용하여 규칙을 제거합니다.'
      },
      {
        id: 14133,
        name: 'add rule with set and map',
        command: `sudo nft add rule ip filter input ip saddr @^{set} @^{map} accept`,
        detail: '특정 셋과 맵을 사용하여 규칙을 추가합니다.'
      },
      {
        id: 14134,
        name: 'remove rule with set and map',
        command: `sudo nft delete rule ip filter input ip saddr @^{set} @^{map} accept`,
        detail: '특정 셋과 맵을 사용하여 규칙을 제거합니다.'
      },
      {
        id: 14135,
        name: 'add rule with set and map and counter',
        command: `sudo nft add rule ip filter input ip saddr @^{set} @^{map} counter`,
        detail: '특정 셋과 맵을 사용하여 카운터를 추가합니다.'
      },
      {
        id: 14136,
        name: 'remove rule with set and map and counter',
        command: `sudo nft delete rule ip filter input ip saddr @^{set} @^{map} counter`,
        detail: '특정 셋과 맵을 사용하여 카운터를 제거합니다.'
      },
      {
        id: 14137,
        name: 'add rule with set and map and counter and limit',
        command: `sudo nft add rule ip filter input ip saddr @^{set} @^{map} limit rate ^{rate} accept`,
        detail: '특정 셋과 맵을 사용하여 카운터와 제한을 추가합니다.'
      },
      {
        id: 14138,
        name: 'remove rule with set and map and counter and limit',
        command: `sudo nft delete rule ip filter input ip saddr @^{set} @^{map} limit rate ^{rate} accept`,
        detail: '특정 셋과 맵을 사용하여 카운터와 제한을 제거합니다.'
      },
      {
        id: 14139,
        name: 'system status',
        command: 'sudo systemctl status nftables',
        detail: 'nftables 서비스 상태를 확인합니다.'
      },
      {
        id: 14140,
        name: 'system reload',
        command: 'sudo systemctl reload nftables',
        detail: 'nftables 서비스를 재시작합니다.'
      },
      {
        id: 14141,
        name: 'system stop',
        command: 'sudo systemctl stop nftables',
        detail: 'nftables 서비스를 중지합니다.'
      },
      {
        id: 14142,
        name: 'system start',
        command: 'sudo systemctl start nftables',
        detail: 'nftables 서비스를 시작합니다.'
      }
    ]
  }
]