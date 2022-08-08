import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

import Phone from '../pages/Phone'
import Laptop from '../pages/Laptop'
import Tablet from '../pages/Tablet'
import Accessory from '../pages/Accessory'
import Smartwatch from '../pages/Smartwatch'
import Order from '../pages/Order'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
         
            <Route path='/dtdd' component={Phone}/>
            <Route path='/laptop-ldp' component={Laptop}/>
            <Route path='/may-tinh-bang' component={Tablet}/>
            <Route path='/phu-kien' component={Accessory}/>
            <Route path='/dong-ho-thong-minh-ldp' component={Smartwatch}/>
            <Route path='/ordersuccess' component={Order}/>
            
        </Switch>
    )
}

export default Routes
