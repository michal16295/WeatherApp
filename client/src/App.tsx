import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { WeatherProvider } from "./context/Weather.context";
import Home from "./screens/Home";
import Week from "./screens/Week";

import routes from "./routes.json";
import "./App.css";

const App = () => {
  const publicRoutes = [
    <Route key="Home" path={routes.HOME} element={<Home />} />,
    <Route key="Week" path={routes.WEEK} element={<Week />} />,
  ];

  return (
    <ErrorBoundary>
      <Router>
        <WeatherProvider>
          <Routes>{publicRoutes}</Routes>
        </WeatherProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
