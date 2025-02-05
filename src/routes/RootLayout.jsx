import {Outlet} from "react-router";
import LeftSidebarTypeTabLayout from "@/components/layouts/LeftSidebarTypeTabLayout.jsx";
import {routes} from "@/routes/rootConfig.js";

const RootLayout = () => {
  return (
    <div>
      <LeftSidebarTypeTabLayout routes={routes} />
      <Outlet />
    </div>
  );
};

export default RootLayout;