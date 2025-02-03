import {Suspense} from "react";

const LazyRouteLayout = ({Component}) => {
  return (
    <Suspense fallback={<div>...기다려주세요.</div>}>
      <Component />
    </Suspense>
  );
};

export default LazyRouteLayout;