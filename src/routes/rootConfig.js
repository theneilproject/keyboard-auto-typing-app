import {lazy} from 'react';
import {rootJson} from "./rootJson.js";

export const routes = [
  {
    path: rootJson.git.path,
    component: lazy(() => import('@/pages/tab-git/GitTab.jsx'))
  }
]