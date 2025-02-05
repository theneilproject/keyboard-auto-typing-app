import {useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";

const LeftSidebarTypeTabLayout = ({routes}) => {
  const location = useLocation();

  useEffect(() => {
    // console.log('url', location.pathname);
  }, [location]);

  return (
    <div className="left-sidebar-type-tab">
      <div className="menu">
        {routes.map(item => (
          <NavLink key={item.id} className="menu-button" to={item.fullPath}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebarTypeTabLayout;