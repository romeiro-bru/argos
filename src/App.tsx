import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/home";
import Favorites from "./pages/favorites/favorites";
import { appRoutes } from "./components/sidebar";
import { FavoritesProvider } from "./pages/common/context/favoritesProvider";
import Details from "./pages/details/details";

export default function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={appRoutes.FAVORITES.path} element={<Favorites />} />
          <Route path={appRoutes.DETAILS.path} element={<Details />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}
