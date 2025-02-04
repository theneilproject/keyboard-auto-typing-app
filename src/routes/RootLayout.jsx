import {Outlet} from "react-router";
import LeftSidebarTypeTabLayout from "@/components/layouts/LeftSidebarTypeTabLayout.jsx";

const RootLayout = () => {
  return (
    <div>
      <LeftSidebarTypeTabLayout />
      <Outlet />
    </div>
  );
};

export default RootLayout;