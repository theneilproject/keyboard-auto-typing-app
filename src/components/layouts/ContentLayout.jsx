import {styles} from "@/store/styles.js";

const ContentLayout = ({children}) => {
  return (
    <div className="content-layout" style={{marginLeft: styles.content.marginLeft}}>
      {children}
    </div>
  );
};

export default ContentLayout;