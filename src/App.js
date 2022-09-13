import React, { useState } from "react";
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
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function App() {
  // declaring the useState for the theme
  const [theme, setTheme] = useState("Light");

  //the function is called when the handleButtonThemeChange is click.
  const handleButtonThemeChange = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };
  return (
    <div className="app" style={theme === "Light" ? darkStyle : lightStyle}>
      <button className="button" onClick={handleButtonThemeChange}>
        {theme === "Light" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>

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
const darkStyle = {
  backgroundColor: "black",
  color: "white",
};
const lightStyle = {
  backgroundColor: "white",
  color: "black",
};

export default App;
