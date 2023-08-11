import "./styles.css";

import Search from "./Search";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card ">
          <div className="card-body">
            <Search defaultCity="Montevideo" />
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
