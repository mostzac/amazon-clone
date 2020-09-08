import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://l.facebook.com/l.php?u=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FG%2F02%2Fdigital%2Fvideo%2Fmerch2016%2FHero%2FCovid19%2FGeneric%2FGWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg%3Ffbclid%3DIwAR0pklO6KF0R0ExN4SLJfAJYARrN7sboID1c5Y5VOaiLZ3PcK27wjSjirCw&h=AT2FChTc2YNgUdZ2ML0HN7aAdpXmOzqcI2GOgDKJoTrmgkOnOVng7GxN8TsGIbuZNJt9revJwMevES-eZncOHk_FTNfS0vN-f0HCa_85ZsQ_d5CYHg0c3wjc7hJhr41eZ55lLsZgRbitTHY&__tn__=R-R&c[0]=AT3GfvJs4tTw9b66jCOQ2Xg7jYILDQ2cR8tS_r1QSnvhYXr8AU-FzvsOvLZ4UZ_bzcw5f7RcIwkDdmY0Pd11bBwGPOMwtYWNPGPQERlEW3lmjuKO_4lJmJD-pPWxg-Y8buLcllfBvlS1HppmGmT93QgsYZ-lhGxVjWOhyVIB"
          alt=""
        />

        <div className="home__row">
          <Product></Product>
          <Product></Product>
        </div>
        <div className="home__row">
          {/* <product> */}
          {/* <product> */}
          {/* <product> */}
        </div>
        <div className="home__row">{/* <product> */}</div>
      </div>
    </div>
  );
}

export default Home;

