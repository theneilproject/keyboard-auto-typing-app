import ContentLayout from "@/components/layouts/ContentLayout.jsx";
import {routes} from "@/routes/rootConfig.js";
import CommandButton from "@/components/tokens/CommandButton.jsx";

const PageTabContentLayout = ({routeName, contentName}) => {
  if (!contentName) return;
  const runCommand = async (command) => {
    try {
      // console.log('command', command);
      // await invoke('type_command', { command: 'git commit -am "' + commitMessage + '"'});
    } catch (error) {
    }
  };
  
  // todo : 1. Enter 입력이 들어오면, 다음 Command가 자동 복사되도록 처리(다음 커맨드가 없으면 처리하지 않음)
  // todo : 2. json 문서로 데이터를 추가 및 수정할 수 있도록 처리
  // todo : 3. 입력값에 들어가는 데이터 중 데이터를 유지할 수 있게끔 처리(localStorage 활용)
  // todo : 4. 우측에 단축키를 설정할 수 있게끔 만들어서, 페이지 별로 단축키마다 다른 명령어를 실행되도록 처리

  return (
    <ContentLayout>
      {routes?.map(({name, commands}) => {
        if (name === routeName) {
          // console.log('commandssssss', commands(contentName));
          // console.log('contentName', contentName);

          return commands(contentName)?.commands?.map(({id, name, command, detail}) => {
            return <CommandButton
              key={id}
              onClick={() => runCommand(name)}
              command={command}
              detail={detail}
              text={name}
              color="blue"
            />
          });
        }
      })}
    </ContentLayout>
  );
};

export default PageTabContentLayout;