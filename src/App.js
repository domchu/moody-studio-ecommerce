import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavLink from "./components/NavLink";
import Main from "./components/Main";
import Terms from "./components/Terms";
import Products from "./components/Products";
import TopRate from "./components/TopRate";
import Footer from "./components/Footer";
import BedSheet from "./components/BedSheet";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div>
      <Header />
      <NavLink />
      <Terms />
      <Banner />
      <Main />
      <Products />
      <BedSheet />
      <TopRate />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
