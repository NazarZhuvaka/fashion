import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import { NotFound } from "../pages/Notfound/Notfound";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [otherPages, setOtherPages] = useState(false);

  useEffect(() => {
    if (
      currentUrl !== "/" &&
      currentUrl !== "/men" &&
      currentUrl !== "/women"
    ) {
      setOtherPages(true);
    } else {
      setOtherPages(false);
    }
  }, [currentUrl]);

  return (
    <>
      {!otherPages && (
        <div className="wrapper">
          <div className="container">
          <Header />
            <Outlet /> 
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};