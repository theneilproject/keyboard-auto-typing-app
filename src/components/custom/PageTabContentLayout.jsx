import ContentLayout from "@/components/layouts/ContentLayout.jsx";
import {routes} from "@/routes/rootConfig.js";
import CommandButton from "@/components/tokens/CommandButton.jsx";

const PageTabContentLayout = ({contentName}) => {
  const runCommand = async (command) => {
    try {
      console.log('command', command);
      // await invoke('type_command', { command: 'git commit -am "' + commitMessage + '"'});
    } catch (error) {
    }
  };

  return (
    <ContentLayout>
      {routes?.map(({name, commands}) => {
        if (name === contentName) {
          console.log('commands', commands);

          return commands?.commands?.map(({id, name, command, detail}) => {
            return <CommandButton
              key={id}
              onClick={() => runCommand(name)}
              command={command}
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