import Home from "src/pages/Home";
import Angiogram from "src/pages/Angiogram";
import HomeLayout from "src/layouts/HomeLayout";
import Vassel from "src/pages/Vassel";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/app/angiogram", element: <Angiogram /> },
      { path: "/app/coronary_arteries", element: <Vassel /> },
    ],
  },
];

export default routes;
