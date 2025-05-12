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
  },
  {
    name: 'openssl',
    commands: [
      {
        id: 212411,
        name: 'pfx to pem',
        command: 'openssl pkcs12 -in ^{certificate}.pfx -out ^{certificate}.pem -nodes',
        detail: 'PFX 인증서를 PEM 형식으로 변환합니다.'
      },
      {
        id: 212412,
        name: 'extract private key',
        command: 'openssl pkcs12 -in ^{certificate}.pfx -nocerts -out ^{privatekey}.key -nodes',
        detail: 'PFX 파일에서 개인 키를 추출합니다.'
      },
      {
        id: 212413,
        name: 'pfx extract cert as pem',
        command: 'openssl pkcs12 -in ^{certificate}.pfx -clcerts -nokeys -out ^{certificate}.pem',
        detail: 'PFX 파일에서 인증서만 PEM 형식으로 추출합니다.'
      },
      {
        id: 212414,
        name: 'extract certificate',
        command: 'openssl pkcs12 -in ^{certificate}.pfx -clcerts -nokeys -out ^{certificate}.crt',
        detail: 'PFX 파일에서 인증서만 추출합니다.'
      },
      {
        id: 212415,
        name: 'create csr',
        command: 'openssl req -new -key ^{keyfile}.key -out ^{certificate}.csr',
        detail: '인증서 서명 요청(CSR)을 생성합니다.'
      },
      {
        id: 212416,
        name: 'crt to pem',
        command: 'openssl x509 -in ^{certificate}.crt -out ^{certificate}.pem -outform PEM',
        detail: 'CRT 인증서를 PEM 형식으로 변환합니다.'
      },
      {
        id: 212417,
        name: 'generate rsa key',
        command: 'openssl genrsa -out ^{keyfile}.key 2048',
        detail: '2048 비트 RSA 개인 키를 생성합니다.'
      },
      {
        id: 212418,
        name: 'generate random',
        command: 'openssl rand -base64 ^{bytes}',
        detail: '지정된 바이트 수만큼 base64로 인코딩된 난수를 생성합니다. JWT 시크릿 키로 사용 가능합니다.'
      },
      {
        id: 212419,
        name: 'generate jwt secret',
        command: 'openssl rand -hex 32',
        detail: 'JWT에 사용할 수 있는 32바이트(256비트) 길이의 16진수 시크릿 키를 생성합니다.'
      },
      {
        id: 212420,
        name: 'generate rsa for jwt',
        command: 'openssl genrsa -out ^{jwt_private}.key 2048',
        detail: 'JWT RS256 알고리즘에 사용할 수 있는 RSA 개인 키를 생성합니다.'
      },
      {
        id: 212421,
        name: 'extract public key for jwt',
        command: 'openssl rsa -in ^{jwt_private}.key -pubout -out ^{jwt_public}.key',
        detail: 'JWT 검증에 사용할 수 있는 RSA 공개 키를 개인 키에서 추출합니다.'
      }
    ]
  }
]
