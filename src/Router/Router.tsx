import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ProductList from "../Components/ProductList/ProductList";
import SearchProduct from "../Components/SearchProducts/SearchProducts";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SearchProduct />
                </Route>
                <Route path="/products/:totalGas">
                    <ProductList />
                </Route>
                <Route path="/product/:productId">
                    <ProductDetails />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;