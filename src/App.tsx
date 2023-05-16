import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider
      router={
        createBrowserRouter(
        createRoutesFromElements(
        
        <Route path="/" element={<h1>My route</h1>} />
        
        )
      )}
    />
  );
}

export default App;
