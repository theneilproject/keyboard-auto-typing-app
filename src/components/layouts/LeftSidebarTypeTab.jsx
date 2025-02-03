import {routes} from "@/routes/rootConfig.js";

const LeftSidebarTypeTab = () => {
  return (
    <div className="left-sidebar-type-tab">
      <div className="menu">
        {routes.map(item => (
          <button key={item.id} className="menu-button">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebarTypeTab;