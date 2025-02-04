import {lazy} from 'react';
import {gitCommands} from "@/store/git.js";
import {dockerCommands} from "@/store/docker.js";

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
    component: lazy(() => import('@/pages/tab-tauri/TauriTab.jsx'))
  },
  {
    id: 1124,
    name: 'windows',
    path: 'windows',
    fullPath: '/windows',
    component: lazy(() => import('@/pages/tab-windows/WindowsTab.jsx'))
  }
]