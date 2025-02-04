export const tauriCommands = [
  {
    name: 'tauri',
    commands: [
      {
        id: 3122,
        name: 'dev',
        command: 'pnpm tauri dev',
        detail: '개발 서버를 실행합니다.'
      },
      {
        id: 31221,
        name: 'dev --verbose',
        command: 'pnpm tauri dev --verbose',
        detail: '개발 서버를 실행하고, 자세한 로그를 출력합니다.'
      },
      {
        id: 3123,
        name: 'build',
        command: 'pnpm tauri build',
        detail: '앱을 빌드합니다.'
      }
    ]
  }
]