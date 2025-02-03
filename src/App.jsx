import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Command } from "@tauri-apps/plugin-shell";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [commitMessage, setCommitMessage] = useState('');
  const [output, setOutput] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  const runCommand = async (command) => {
    try {
      let result;

      if (command === 'commit') {
        result = await Command.create('exec-git', ['commit', '-am', commitMessage]);
        await invoke('type_command', { command: 'git commit -am ' + commitMessage });
      } else if (command === 'add') {
        result = await Command.create('exec-git', ['add', '.']);
        await invoke('type_command', { command: 'git add .' });
      } else if (command === 'push') {
        result = await Command.create('exec-git', ['push']);
        await invoke('type_command', { command: 'git push' });
      } else if (command === 'status') {
        result = await Command.create('exec-git', ['status']);
        await invoke('type_command', { command: 'git status' });
      }

      console.log('result', result);

      setOutput(result.args?.join(' '));
    } catch (error) {
      setOutput(error.toString());
    }
  };


  return (
    <main className="container">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Git Commander</h1>

        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => runCommand('status')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              git status
            </button>

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
