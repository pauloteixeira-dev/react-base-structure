import React, { ComponentType, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import LoadingOverlay from "./Components/Layout/Loading/Overlay";
import { routes } from "./Constants/routes";

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<LoadingOverlay />}>
        <Component {...props} />
      </Suspense>
    );

// Ordem de Servico pages
const OrdemDeServicoList = Loadable(
  lazy(() => import("./Pages/OrdemDeServico/List"))
);

const Rotas = () => {
  return (
    <Routes>
      <Route path={routes.BASE} element={<Layout />}>
        <Route index element={<div>home</div>} />
        <Route path={routes.OS_LIST} element={<OrdemDeServicoList />} />
      </Route>
      <Route
        path={routes.OS_AVALIACAO_CREATE(":osId")}
        element={<CreateAvaliacao />}
      />
    </Routes>
  );
};

export default Rotas;
