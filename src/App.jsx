import React from "react";
import "./App.less";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "src/redux/store";

function App() {
  const routing = useRoutes(routes);
  return <Provider store={store}>{routing}</Provider>;
}

export default App;
