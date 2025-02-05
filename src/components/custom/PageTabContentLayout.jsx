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