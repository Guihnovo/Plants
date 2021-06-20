import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../componentes/footer/footer';
import Header from "../componentes/header/header";
import DetailProduct from '../pages/Detailproduct/detailProduct';
import UserLogin from '../pages/Formulario/Formulario';
import StoreProvider from '../componentes/Store/Provider';
import RoutesPrivate from '../componentes/Routes/Private/Private';

import Products from '../pages/products/products';

const Router = () => {
    return (
        <main>
            <StoreProvider>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <RoutesPrivate exact path={'/'}>
                            <Products />
                        </RoutesPrivate>
                        <RoutesPrivate exact path={'/detalhes/:id'}>
                            <DetailProduct />
                        </RoutesPrivate>
                        <Route exact path={'/form'}>
                            <UserLogin/>
                        </Route>  
                    </Switch>
                </BrowserRouter>
                <Footer/> 
            </StoreProvider>
        </main>
    )
}
export default Router;