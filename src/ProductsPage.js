import {BrowserRouter, Switch, Route, Link} from "react-router-dom"

export default function ProductsPage() {
    return (
        <BrowserRouter>
            <h1>Contact Page</h1>
            <ol>
                <li><Link to="/create">Create Product</Link></li>
                <li>show Product</li>
                <li>Undate Product</li>
                <li>Delete Product</li>
            </ol>
            <Switch>
                <Route path="/product/create" component={() => <h1>Create Product</h1>}></Route>
            </Switch>
        </BrowserRouter>
    )
}