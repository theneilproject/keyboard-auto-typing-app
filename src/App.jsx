import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Command } from "@tauri-apps/plugin-shell";
import "./App.css";
import CommandButton from "./components/CommandButton.jsx";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [commitMessage, setCommitMessage] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (command) => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const runCommand = async (command) => {
    try {
      let result;

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
      setOutput(error.toString());
    }
  };


  return (
    <main className="container">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Commander</h1>

        <div className="space-y-4">
          <div className="flex gap-2">
            <CommandButton
              // className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => runCommand('status')}
              command="git status"
              text="git status"
              color="blue"
            />

            <button
              onClick={() => runCommand('add')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              git add .
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              placeholder="Commit message"
              className="flex-1 px-4 py-2 border rounded"
            />

            <button
              onClick={() => runCommand('commit')}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              disabled={!commitMessage}
            >
              git commit
            </button>
          </div>

          <button
            onClick={() => runCommand('push')}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            git push
          </button>

          {output && (
            <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto">
            {output}
          </pre>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
