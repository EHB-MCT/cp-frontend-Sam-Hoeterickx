import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"

//Components
import { Navigation } from "../../../shared/Navigation";

export const App = () => {

  const NAVIGATE = useNavigate();

  useEffect(() => {
    if(window.location.href === "http://localhost:5173/") {
      NAVIGATE('/home')
    }
  }, [])

  return (
    <div>
      <Navigation />
      <Outlet /> 
    </div>
  )
}