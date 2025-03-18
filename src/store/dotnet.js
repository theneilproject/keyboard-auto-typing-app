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
        name: 'update',
        command: 'dotnet ef database update ^{migrationName} --project ^{projectName} --context ^{contextName}',
        detail: '데이터베이스를 업데이트합니다.'
      }
    ]
  }
]