﻿import ContentLayout from "@/components/layouts/ContentLayout.jsx";
import {routes} from "@/routes/rootConfig.js";
import CommandButton from "@/components/tokens/CommandButton.jsx";

const PageTabContentLayout = ({routeName, contentName}) => {
  const runCommand = async (command) => {
    try {
      // console.log('command', command);
      // await invoke('type_command', { command: 'git commit -am "' + commitMessage + '"'});
    } catch (error) {
    }
  };
  
  // todo : 1. Enter 입력이 들어오면, 다음 Command가 자동 복사되도록 처리(다음 커맨드가 없으면 처리하지 않음)
  // todo : 3. 같은 Command 내부에서도 서로 다른 Command를 구분해서 실행되도록 처리

  return (
    <ContentLayout>
      {routes?.map(({name, commands}) => {
        if (name === routeName) {
          // console.log('commands', commands);

          return commands?.commands?.map(({id, name, command, detail}) => {
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