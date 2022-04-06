import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from "./components"
import { Lottie, Css, ReactTransition } from "./pages"

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="lottie" element={<Lottie />} />
            <Route path="css" element={<Css />} />
            <Route path="react-transition" element={<ReactTransition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};