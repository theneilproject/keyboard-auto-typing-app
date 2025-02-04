import {lazy} from 'react';
import {gitCommands} from "@/store/git.js";
import {dockerCommands} from "@/store/docker.js";
import {windowsCommands} from "@/store/windows.js";
import {tauriCommands} from "@/store/tauri.js";

export const routes = [
  {
    id: 1121,
    name: 'git',
    path: '',
    fullPath: '/',
    component: lazy(() => import('@/pages/tab-git/GitTab.jsx')),
    commands: gitCommands.filter(g => g.name === 'git' && g.commands)[0]
  },
  {
    id: 1122,
    name: 'docker',
    path: 'docker',
    fullPath: '/docker',
    component: lazy(() => import('@/pages/tab-docker/DockerTab.jsx')),
    commands: dockerCommands.filter(d => d.name === 'docker' && d.commands)[0]
  },
  {
    id: 1123,
    name: 'tauri',
    path: 'tauri',
    fullPath: '/tauri',
    component: lazy(() => import('@/pages/tab-tauri/TauriTab.jsx')),
    commands: tauriCommands.filter(t => t.name === 'tauri' && t.commands)[0]
  },
  {
    id: 1124,
    name: 'windows',
    path: 'windows',
    fullPath: '/windows',
    component: lazy(() => import('@/pages/tab-windows/WindowsTab.jsx')),
    commands: windowsCommands.filter(w => w.name === 'task' && w.commands)[0]
  }
]