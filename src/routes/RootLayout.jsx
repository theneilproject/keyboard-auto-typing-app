import {Outlet} from "react-router";
import LeftSidebarTypeTabLayout from "@/components/layouts/LeftSidebarTypeTabLayout.jsx";
import {routes} from "@/routes/rootConfig.js";
import {styles} from "@/store/styles.js";
import {ztSidebarStore} from "@/store/sidebarStore.js";

const RootLayout = () => {
  const {sidebar} = ztSidebarStore();

  // console.log('sidebar', sidebar);

  return (
    <div>
      <LeftSidebarTypeTabLayout routes={routes} />
      <LeftSidebarTypeTabLayout
        routes={
        routes.
        filter(r => r.name === sidebar.state_first_sidebar)?.[0]?.child?.
        map((c, i) => ({id: c.name + i, name: c.name, fullPath: routes.
          filter(r => r.name === sidebar.state_first_sidebar)?.[0]?.fullPath }))
      } width={styles.sidebar.marginLeft} marginLeft={styles.sidebar.width}
      />
      <Outlet />
    </div>
  );
};

export default RootLayout;