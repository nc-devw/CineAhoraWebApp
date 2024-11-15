import { Routes, Route, HashRouter } from "react-router-dom";
import { PATHS } from "@/routes";
import { Layout } from "@/components/Layout";
import {
  ErrorPage,
  HomePage,
  Offers,
  AboutUs,
  Detail,
  MyTicketsPage,
  SessionPage,
} from "@/pages";

export const RoutesProvider = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.OFFERS} element={<Offers />} />
          <Route path={PATHS.ABOUT_US} element={<AboutUs />} />
          <Route path={PATHS.DETAIL} element={<Detail />} />
          <Route path={PATHS.MY_TICKETS} element={<MyTicketsPage />} />
          <Route path={PATHS.SESSION} element={<SessionPage />} />
        </Route>
        {/* 404 - Error */}
        <Route path={PATHS.ERROR} element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
