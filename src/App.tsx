import { useState } from "react";
import "./App.css";
import { useAuthMapRoutes } from "./routes/Routes";
function App() {
  const myRoute = useAuthMapRoutes();


  return <>{myRoute}</>;
}

export default App;
