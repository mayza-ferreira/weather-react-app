import "./styles.css";
import Forecast from "./Forecast";

import Search from "./Search";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card ">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <div id="forecast">
                  <Forecast />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <Search defaultCity="Montevideo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
