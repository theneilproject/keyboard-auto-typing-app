import PageTabContentLayout from "@/components/custom/PageTabContentLayout.jsx";
import {ztSidebarStore} from "@/store/sidebarStore.js";

const PageTabZustandLayout = ({name}) => {
  const {sidebar} = ztSidebarStore();
  return (
    <PageTabContentLayout routeName={name} contentName={sidebar.state_first_sidebar === name ? sidebar.state_second_sidebar : ""} />
  );
};

export default PageTabZustandLayout;