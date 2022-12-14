import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/category/:name" component={Category} />
          <Route path="/meal/:id" component={Recipe} />
          <Route component={NotFound} />
          32q1 `23q1`q1``1q1q1`1 q`q`q1`1
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
