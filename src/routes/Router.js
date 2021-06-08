import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../componentes/footer/footer';
import Header from "../componentes/header/header";
import DetailProduct from '../pages/Detailproduct/detailProduct';
import Products from '../pages/products/products';

const Router = () => {
    return (
        <main>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'}>
                        <Products />
                    </Route>
                    <Route exact path={'/detalhes/:id'}>
                        <DetailProduct />
                    </Route>  
                </Switch>
            </BrowserRouter>
            <Footer/>
        </main>
    )
}
export default Router;