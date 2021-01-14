import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import CreateProduct from './CreateProduct'



// function ShowProduct() {
//     return <h1>Show Product</h1>
// }

// function UpdateProduct() {
//     return <h1>Update Product</h1>
// }

// function DeleteProduct() {
//     return <h1>Delete Product</h1>
// }

export default function ProductsPage() {
    const {path} = useRouteMatch()


    return (
        <>
        <h1>Products Page</h1>
        <ol>
            <li><Link to={`${path}/new`}>Create Product</Link></li>
            
            
        </ol>
        <Switch>
            <Route path={`${path}/new`} component={CreateProduct}></Route>
        </Switch>
        </>
    )
}