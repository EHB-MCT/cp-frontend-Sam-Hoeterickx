import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"

//Components
import { Footer } from "../../../shared/Footer";
import { Navigation } from "../../../shared/Navigation";

//Routes
import { ALL_FAIRY_TALES_ROUTE } from "../AllFairyTales/allFairyTales.route";

//CSS
import '../../../../styles/base/_index.scss'

export const App = () => {

  const NAVIGATE = useNavigate();

  useEffect(() => {
    const baseUrl = window.location.href;
    const splitUrl = baseUrl.split("/");
    const path = splitUrl[4];

    if(path === "") {
      NAVIGATE(ALL_FAIRY_TALES_ROUTE.path);   
    }
  }, [])

  return (
    <>
      <Navigation />
      <Outlet /> 
      <Footer />
    </>
  )
}