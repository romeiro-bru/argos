import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/home";
import Favorites from "./pages/favorites/favorites";
import { FavoritesProvider } from "./pages/common/context/favoritesProvider";
import Details from "./pages/details/details";
import { appRoutes } from "./routes";
import Registration from "./pages/registration/registration";
import Landing from "./pages/landing/landing";
import { Signup } from "./pages/signup/signup";
import { UserSupabaseProvider } from "./context/userSupabaseContext";

export default function App() {
  return (
    <UserSupabaseProvider>
      <FavoritesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path={appRoutes.HOME.path} element={<Home />} />
            <Route path={appRoutes.FAVORITES.path} element={<Favorites />} />
            <Route path={appRoutes.DETAILS.path} element={<Details />} />
            <Route path={appRoutes.REGISTER.path} element={<Registration />} />
            <Route path={appRoutes.SIGN_UP.path} element={<Signup />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </UserSupabaseProvider>
  );
}
