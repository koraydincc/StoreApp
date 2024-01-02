import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Search from "../Modals/Search/Search";
import { useState } from "react";


const MainLayout = ({ children }) => {

  const [isSearchShow, setIsSearchShow] = useState(false)



  return (
    <React.Fragment>
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}></Search>
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;


