import React from "react";
import "./css/HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import RowBanner from "../components/RowBanner";
import Footer from "../components/Footer";

import { requests } from "../util/Requests";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals.replace(
          "NO",
          Math.round(Math.random() * 20)
        )}
        isLargeRow
      />

      <RowBanner />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default HomeScreen;
