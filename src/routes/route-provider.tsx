import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PATHS } from "@/routes";
import { AdminLayout, Layout } from "@/components/Layout";
import {
  ErrorPage,
  HomePage,
  Offers,
  AboutUs,
  Detail,
  MyTicketsPage,
  SessionPage,
  SeatsPage,
  ConfirmationPage,
  Admin,
  Login,
} from "@/pages";
import { DataListAdmin, NewFunctionAdmin, NewFilmAdmin } from "@/pages/admin";
import { FilmListAdmin } from "@/pages/admin/film/list";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.OFFERS} element={<Offers />} />
          <Route path={PATHS.ABOUT_US} element={<AboutUs />} />
          <Route path={PATHS.DETAIL} element={<Detail />} />
          <Route path={PATHS.MY_TICKETS} element={<MyTicketsPage />} />
          <Route path={PATHS.SESSION} element={<SessionPage />} />
          <Route path={PATHS.SEATS} element={<SeatsPage />} />
          <Route path={PATHS.CONFIRMATION} element={<ConfirmationPage />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>
        {/* 404 - Error */}
        <Route path={PATHS.ERROR} element={<ErrorPage />} />
        <Route path={PATHS.HOME} element={<AdminLayout />}>
          <Route path={PATHS.ADMIN} element={<Admin />} />
          <Route
            path={PATHS.ADMIN_NEW_FUNCTION}
            element={<NewFunctionAdmin />}
          />
          <Route path={PATHS.ADMIN_FUNCTION_LIST} element={<DataListAdmin />} />
          <Route path={PATHS.ADMIN_NEW_FILM} element={<NewFilmAdmin />} />
          <Route path={PATHS.ADMIN_FILM_LIST} element={<FilmListAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
