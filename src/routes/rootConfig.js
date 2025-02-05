import {lazy} from 'react';
import {gitCommands} from "@/store/git.js";
import {dockerCommands} from "@/store/docker.js";
import {windowsCommands} from "@/store/windows.js";
import {tauriCommands} from "@/store/tauri.js";
import {rhelCommands} from "@/store/rhel.js";

export const routes = [
  {
    id: 1121,
    name: 'git',
    path: '',
    fullPath: '/',
    component: lazy(() => import('@/pages/tab-git/GitTab.jsx')),
    commands: (sub) => gitCommands.filter(g => g.name === sub && g.commands)[0],
    child: gitCommands
  },
  {
    id: 1122,
    name: 'docker',
    path: 'docker',
    fullPath: '/docker',
    component: lazy(() => import('@/pages/tab-docker/DockerTab.jsx')),
    commands: (sub) => dockerCommands.filter(d => d.name === sub && d.commands)[0],
    child: dockerCommands
  },
  {
    id: 1123,
    name: 'tauri',
    path: 'tauri',
    fullPath: '/tauri',
    component: lazy(() => import('@/pages/tab-tauri/TauriTab.jsx')),
    commands: (sub) => tauriCommands.filter(t => t.name === sub && t.commands)[0],
    child: tauriCommands
  },
  {
    id: 1124,
    name: 'windows',
    path: 'windows',
    fullPath: '/windows',
    component: lazy(() => import('@/pages/tab-windows/WindowsTab.jsx')),
    commands: (sub) => windowsCommands.filter(w => w.name === sub && w.commands)[0],
    child: windowsCommands
  },
  {
    id: 1125,
    name: 'rhel',
    path: 'rhel',
    fullPath: '/rhel',
    component: lazy(() => import('@/pages/tab-rhel/RhelTab.jsx')),
    commands: (sub) => rhelCommands.filter(w => w.name === sub && w.commands)[0],
    child: rhelCommands
  }
]