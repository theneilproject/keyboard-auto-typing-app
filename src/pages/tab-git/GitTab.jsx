import CommandButton from "../../components/CommandButton.jsx";
import {invoke} from "@tauri-apps/api/core";
import {useState} from "react";

const GitTab = () => {
  const [commitMessage, setCommitMessage] = useState('');

  const runCommand = async (command) => {
    try {
      if (command === 'commit') {
        await invoke('type_command', { command: 'git commit -am "' + commitMessage + '"'});
      } else if (command === 'add') {
        await invoke('type_command', { command: 'git add .' });
      } else if (command === 'push') {
        await invoke('type_command', { command: 'git push' });
      } else if (command === 'status') {
        await invoke('type_command', { command: 'git status' });
      }
    } catch (error) {
    }
  };

  return (
    <div>
      <CommandButton
        // className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => runCommand('status')}
        command="git status"
        text="git status"
        color="blue"
      />

    </div>
  );
};

export default GitTab;