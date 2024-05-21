import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Ourservices from "./pages/Ourservices";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import DisplayArea from "./components/DisplayArea";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
  },
  {
    path: "/home",
    element: (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    ),
  },
  {
    path: "/about",
    element: (
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
    ),
  },
  {
    path: "/ourservices",
    element: (
      <ErrorBoundary>
        <Ourservices />
      </ErrorBoundary>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
    ),
  },
  {
    path: "/contactus",
    element: (
      <ErrorBoundary>
        <ContactUs />
      </ErrorBoundary>
    ),
  },
  {
    path: "/displayarea",
    element: (
      <ErrorBoundary>
        <DisplayArea />
      </ErrorBoundary>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
