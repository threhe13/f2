import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./routes/home";
import { Auth } from "./routes/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
