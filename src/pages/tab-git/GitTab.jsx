import CommandButton from "@/components/tokens/CommandButton.jsx";
import {invoke} from "@tauri-apps/api/core";
import {useState} from "react";
import ContentLayout from "@/components/layouts/ContentLayout.jsx";
import {routes} from "@/routes/rootConfig.js";

const GitTab = () => {
  const [commitMessage, setCommitMessage] = useState('');

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
        if (name === 'git') {
          console.log('commands', commands);

          return commands?.commands?.map(({id, name, command, detail}) => {
            // console.log('id', id);
            // console.log('name', name);
            // console.log('command', command);
            // console.log('detail', detail);

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

export default GitTab;