import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Route path="/" component={Home} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
