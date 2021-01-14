import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import ContactPage from './ContactPage.js'
import AboutPage from './AboutPage.js'
import HomePage from './HomePage.js'
import ProductsPage from './ProductsPage.js'


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/contact">Contact</Link> |
          <Link to="/about">About</Link> |
          <Link to="/">Home</Link> |
          <Link to="/products">Products</Link> |
          </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/product" component={ProductsPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
