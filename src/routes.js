import Home from "src/pages/Home";
import Angiogram from "src/pages/Angiogram";
import HomeLayout from "src/layouts/HomeLayout";
import Vassel from "src/pages/Vassel";
import HowToUse from "./pages/HowToUse";
import AngiogramInfo from "./pages/AngiogramInfo";
import VasselInfo from "./pages/VasselInfo";
import AboutUs from "./pages/AboutUs";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/app/angiogram", element: <Angiogram /> },
      { path: "/app/coronary_arteries", element: <Vassel /> },
      { path: "/how_to_use", element: <HowToUse /> },
      { path: "/about_us", element: <AboutUs /> },
      { path: "/app/angiogram/info/:id", element: <AngiogramInfo /> },
      { path: "/app/coronary_arteries/info/:id", element: <VasselInfo /> },
    ],
  },
];

export default routes;
