import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'
const Catalog = () => {

    const initFilter = {
        category: [],
        color: [],
        price: [],
        price2:[],
        price3:[]


    }

    const prices = [
        {
            price:'5.000.000 - 10.000.000'
    
        },
       
        
    
    ]

    const prices2 = [
        {
            price2:'10.000.000 - 20.000.000'
    
        },
       
        
    
    ]
    const prices3 = [
        {
            price3:'20.000.000 - 30.000.000'
    
        },
       
        
    
    ]

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case "COLOR":
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break
                case "PRICE":
                    setFilter({...filter, price: [...filter.price, item.price]})
                    break
                case "PRICE2":
                    setFilter({...filter, price2: [...filter.price2, item.price]})
                    break
                case "PRICE3":
                    setFilter({...filter, price3: [...filter.price3, item.price]})
                    break
                default:
            }
        } else {
            switch(type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break
                case "PRICE":
                    const newPrice = filter.price.filter(e => e !== item.price)
                    setFilter({...filter, price: newPrice})
                    break
                case "PRICE2":
                    const newPrice2 = filter.price2.filter(e => e !== item.price)
                    setFilter({...filter, price2: newPrice2})
                    break
                case "PRICE3":
                    const newPrice3 = filter.price3.filter(e => e !== item.price)
                    setFilter({...filter, price3: newPrice3})
                    break
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            

            if (filter.price.length > 0) {
                
                temp = temp.filter((e)  => {
                    return e.price > 5000000 && e.price < 10000000
                } )
                   
                }
            if (filter.price2.length > 0) {
               
                temp = temp.filter((e)  => {
                    return e.price > 10000000 && e.price < 20000000
                } )
                   
                }
            if (filter.price3.length > 0) {
               
                temp = temp.filter((e)  => {
                    return e.price > 20000000 && e.price < 30000000
                } )
                   
                }
            

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    

    return (
        <Helmet title="Sản phẩm">
            <br/>
            <div className="catalog">
                <div className="catalog__filter">
                    <div className="catalog__filter__close">
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                            checked={filter.color.includes(item.color)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Giá
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                prices.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.price}
                                            onChange={(input) => filterSelect("PRICE", input.checked, item)}
                                            checked={filter.price.includes(item.price)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                prices2.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.price2}
                                            onChange={(input) => filterSelect("PRICE2", input.checked, item)}
                                            checked={filter.price2.includes(item.price)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                prices3.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.price3}
                                            onChange={(input) => filterSelect("PRICE3", input.checked, item)}
                                            checked={filter.price3.includes(item.price)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                
                <div className="catalog__content popular" style={{padding:"20px"}}>
                    <InfinityList
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog