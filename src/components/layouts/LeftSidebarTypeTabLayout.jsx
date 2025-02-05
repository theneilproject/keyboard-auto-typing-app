import {useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {ztSidebarStore} from "@/store/sidebarStore.js";

const LeftSidebarTypeTabLayout = ({routes, width = "6rem", marginLeft = "0"}) => {
  const location = useLocation();
  const {sidebar, setFirstSidebar, setSecondSidebar} = ztSidebarStore();

  //region Conditions
  const condition = marginLeft === "0";
  const layoutClassNameCondition = condition ? "" : "secondary-sidebar"
  const secondActiveClassNameCondition = (item) => condition ? "" : sidebar.state_second_sidebar === item.name ? "active-secondary" : ""
  const activeClickFunctionCondition = (item) => condition ? setFirstSidebar(item.name) : setSecondSidebar(item.name)
  //endregion


  useEffect(() => {
    // console.log('url', location.pathname);
  }, [location]);

  return (
    <div className={`left-sidebar-type-tab ${layoutClassNameCondition}`} style={{marginLeft: marginLeft, width: width}}>
      <div className="menu">
        {routes.map(item => (
          <NavLink key={item.id}
                   className={`menu-button ${secondActiveClassNameCondition(item)}`}
                   to={item.fullPath}
                   onClick={() => activeClickFunctionCondition(item)}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebarTypeTabLayout;