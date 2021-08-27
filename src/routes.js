import Home from "src/pages/Home";
import Angiogram from "src/pages/Angiogram";
import HomeLayout from "src/layouts/HomeLayout";
import Vassel from "src/pages/Vassel";
import HowToUse from "./pages/HowToUse";
import AngiogramInfo from "./pages/AngiogramInfo";
import VasselInfo from "./pages/VasselInfo";
import VasselAR from "./pages/VasselAR";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/app/angiogram", element: <Angiogram /> },
      { path: "/app/coronary_arteries", element: <Vassel /> },
      { path: "/app/coronary_ar", element: <VasselAR /> },
      { path: "/how_to_use", element: <HowToUse /> },
      { path: "/app/angiogram/info/:id", element: <AngiogramInfo /> },
      { path: "/app/coronary_arteries/info/:id", element: <VasselInfo /> },
    ],
  },
];

export default routes;
