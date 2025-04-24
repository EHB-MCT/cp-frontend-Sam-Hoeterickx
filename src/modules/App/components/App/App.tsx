import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"

export const App = () => {

  const NAVIGATE = useNavigate();

  useEffect(() => {
    if(window.location.href === "http://localhost:5173/") {
      NAVIGATE('/home')
    }
  }, [])

  return (
    <div>
      <h1>Hello world</h1>
      <Outlet />
    </div>
  )
}