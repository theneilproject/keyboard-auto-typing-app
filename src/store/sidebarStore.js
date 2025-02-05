import {produce} from "immer";
import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {routes} from "@/routes/rootConfig.js";

export const ztSidebarStore = create(devtools(persist(set => {
  const sidebar = {
    state_first_sidebar: "git",
    state_second_sidebar: "",
  }

  const setFirstSidebar = (data) => set(produce((draft) => {
    draft.sidebar.state_first_sidebar = data;
    draft.sidebar.state_second_sidebar = routes.filter(r => r.name === data)[0].child[0].name;
  }), false, "setFirstSidebar")

  const setSecondSidebar = (data) => set(produce((draft) => {
    draft.sidebar.state_second_sidebar = data;
  }), false, "setSecondSidebar")

  return {
    sidebar: sidebar, setFirstSidebar, setSecondSidebar
  }
}, { name: "sidebarStore" })))