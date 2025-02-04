import {BrowserRouter, Route, Routes} from "react-router-dom";
import LazyRouteLayout from "../components/layouts/LazyRouteLayout.jsx";
import RootLayout from "./RootLayout.jsx";
import {routes} from "@/routes/rootConfig.js";
import {Suspense} from "react";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LazyRouteLayout Component={RootLayout} />}>
          {routes?.map(({name, path, component: Component}) => (
            <Route key={name} path={path} element={<Suspense fallback={<div>...로딩중</div>}><Component /></Suspense>}/>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;