export const dockerCommands = [
  {
    name: 'docker',
    commands: [
      {
        id: 2122,
        name: 'ps',
        command: 'docker ps -a',
        detail: '실행 중인 컨테이너 목록을 보여줍니다.'
      },
      {
        id: 2123,
        name: 'images',
        command: 'docker images',
        detail: '이미지 목록을 보여줍니다.'
      },
      {
        id: 21231,
        name: 'volume ls',
        command: 'docker volume ls',
        detail: '볼륨 목록을 보여줍니다.'
      },
      {
        id: 21232,
        name: 'network ls',
        command: 'docker network ls',
        detail: '네트워크 목록을 보여줍니다.'
      },
      {
        id: 21233,
        name: 'network create',
        command: 'docker network create ^{networkName}',
        detail: '네트워크를 생성합니다.'
      },
      {
        id: 21232,
        name: 'pull',
        command: 'docker pull ^{imageName}',
        detail: '이미지를 다운로드합니다.'
      },
      {
        id: 2126,
        name: 'exec',
        command: 'docker exec -it ^{containerId} /bin/bash',
        detail: '컨테이너 내부에 접속합니다.'
      },
      {
        id: 2124,
        name: 'compose up',
        command: 'docker compose up',
        detail: 'docker-compose로 컨테이너를 실행합니다.'
      },
      {
        id: 2125,
        name: 'compose down',
        command: 'docker compose down',
        detail: 'docker-compose로 컨테이너를 중지합니다.'
      },
      {
        id: 2127,
        name: 'compose logs',
        command: 'docker compose logs',
        detail: 'docker-compose로 컨테이너 로그를 확인합니다.'
      }
    ]
  }
]