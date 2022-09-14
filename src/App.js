import "./App.css";
import Nav from "./comps/Nav";
import Banner from "./comps/Banner";
import Row from "./comps/Row";
import requests from "./utils/requests";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title="Netflix המקוריים של"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="פופולריים" fetchUrl={requests.fetchTrending} />
      <Row title="הסרטים הכי מדורגים" fetchUrl={requests.fetchTopRated} />
      <Row title="סרטי אקשן" fetchUrl={requests.fetchActionMovies} />
      <Row title="סרטי קומדיה" fetchUrl={requests.fetchComedyMovies} />
      <Row title="סרטי אימה" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="סרטים רומנטיים" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="דוקומנטריים" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
