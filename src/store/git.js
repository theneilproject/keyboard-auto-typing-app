export const gitCommands =  [
  {
    name: 'git',
    commands: [
      {
        id: 2121,
        name: 'add',
        command: 'git add .',
        detail: '스테이징 영역에 변경사항을 추가합니다.'
      },
      {
        id: 2122,
        name: 'commit',
        command: 'git commit -m "^{message}"',
        detail: '커밋을 생성합니다.'
      },
      {
        id: 2123,
        name: 'push',
        command: 'git push',
        detail: '커밋을 원격 저장소로 전송합니다.'
      },
      {
        id: 2124,
        name: 'pull',
        command: 'git pull',
        detail: '원격 저장소의 변경사항을 로컬 저장소로 가져옵니다.'
      },
      {
        id: 2125,
        name: 'clone',
        command: 'git clone ^{repository}',
        detail: '원격 저장소를 복제합니다.'
      },
      {
        id: 2126,
        name: 'branch',
        command: 'git branch',
        detail: '브랜치 목록을 확인합니다.'
      },
      {
        id: 2127,
        name: 'checkout',
        command: 'git checkout ^{branch}',
        detail: '브랜치를 전환합니다.'
      },
      {
        id: 2128,
        name: 'merge',
        command: 'git merge ^{branch}',
        detail: '브랜치를 병합합니다.'
      },
      {
        id: 2129,
        name: 'rebase',
        command: 'git rebase ^{branch}',
        detail: '브랜치를 재배치합니다.'
      },
      {
        id: 2130,
        name: 'reset',
        command: 'git reset ^{commit}',
        detail: '커밋을 되돌립니다.'
      },
      {
        id: 2131,
        name: 'revert',
        command: 'git revert ^{commit}',
        detail: '커밋을 취소합니다.'
      },
      {
        id: 2132,
        name: 'stash',
        command: 'git stash',
        detail: '작업을 임시로 저장합니다.'
      },
      {
        id: 2133,
        name: 'tag',
        command: 'git tag ^{tag}',
        detail: '태그를 추가합니다.'
      },
      {
        id: 2134,
        name: 'log',
        command: 'git log',
        detail: '커밋 로그를 확인합니다.'
      },
      {
        id: 2135,
        name: 'status',
        command: 'git status',
        detail: '작업 디렉토리의 상태를 확인합니다.'
      },
      {
        id: 2136,
        name: 'config',
        command: 'git config --global user.name ^{name} && git config --global user.email ^{email}',
        detail: '사용자 정보를 설정합니다.'
      },
      {
        id: 2137,
        name: 'init',
        command: 'git init',
        detail: '새로운 저장소를 초기화합니다.'
      }
    ]
  }
]