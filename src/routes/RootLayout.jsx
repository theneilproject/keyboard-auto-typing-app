import {Outlet} from "react-router";
import LeftSidebarTypeTab from "@/components/layouts/LeftSidebarTypeTab.jsx";

const RootLayout = () => {
  return (
    <div>
      <LeftSidebarTypeTab />
      <Outlet />
    </div>
  );
};

export default RootLayout;