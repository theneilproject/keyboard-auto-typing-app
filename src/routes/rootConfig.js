import {lazy} from 'react';

export const routes = [
  {
    id: 1121,
    name: 'git',
    path: '',
    component: lazy(() => import('@/pages/tab-git/GitTab.jsx'))
  },
  {
    id: 1122,
    name: 'docker',
    path: 'docker',
    component: lazy(() => import('@/pages/tab-docker/DockerTab.jsx'))
  }
]