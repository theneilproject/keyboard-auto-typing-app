export const dotnetCommands = [
  {
    name: 'dotnet',
    commands: [
      {
        id: 3121,
        name: 'migration',
        command: 'dotnet ef migrations add ^{migrationName} --project ^{projectName} --context ^{contextName}',
        detail: '마이그레이션을 생성합니다.'
      },
      {
        id: 3122,
        name: 'migration update',
        command: 'dotnet ef database update ^{migrationName} --project ^{projectName} --context ^{contextName}',
        detail: '데이터베이스를 업데이트합니다.'
      },
      {
        id: 3123,
        name: 'migration remove',
        command: 'dotnet ef migrations remove --project ^{projectName} --context ^{contextName}',
        detail: '마이그레이션을 삭제합니다.'
      },
      {
        id: 3124,
        name: 'migration list',
        command: 'dotnet ef migrations list --project ^{projectName} --context ^{contextName}',
        detail: '마이그레이션 목록을 확인합니다.'
      },
      {
        id: 3125,
        name: 'tool update',
        command: 'dotnet tool update --global dotnet-ef --version ^{version}',
        detail: 'dotnet-ef 도구를 업데이트합니다.'
      }
    ]
  }
]