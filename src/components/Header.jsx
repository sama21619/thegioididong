import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]





const Header = () => {
    const [search, setSearch] = useState()
    const cartItems = useSelector((state) => state.cartItems.value)
    const totalProduct = cartItems.reduce((total, item) => total + Number(item.quantity), 0)

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
     



    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')
    
    const htk = document.getElementById('')

    return (
        <heaader className="header" ref={headerRef}>
          
                <div className="header__top">
                    <div>
                        <a href="/" className='header__logo'>
                            <i class="iconnewglobal-logo"></i>
                        </a>
                        <a href="/" className='header__address'>
                            Xem giá, tồn kho tại:
                        </a>

                        <form action="/tim-kiem"  class="header__search">
                            <input type="text" id="skw" class="input-search" 
                            
                            placeholder="Bạn tìm gì..." 
                            name="key" 
                            autocomplete="off" 
                            maxlength="100"
                            value={search}
                            onChange={handleSearch}
                             />
                            <button type='submit'>
                                <i class="icon-search"></i>
                            </button>
                            <div id="search-result"></div>
                        </form>


                        <a href="/lich-su-mua-hang" class="name-order">lịch sử đơn hàng </a>
                        <a href="/cart" class="header__cart menu-info">
                            <div class="box-cart">
                                <i class="iconnewglobal-cart"></i>
                                <span class="cart-number has-cart">{totalProduct}</span>
                                <span>Giỏ hàng</span>
                            </div>
                        </a>
                    </div>
                    
                </div>


                <div className='header__main'>
                    <div>
                        <ul class="main-menu">
                            <li>
                                <a href="/dtdd">
                                    <i><img src="https://cdn.tgdd.vn//content/icon-phone-96x96-2.png" alt="" /></i>
                                    <span>Điện thoại</span>
                                </a>
                            </li>
                            <li>
                            <a href="/laptop-ldp">
                                    <i><img src="https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png" alt="" /></i>
                                    <span>Laptop</span>
                                </a>
                            </li>
                           
                            <li>
                            <a href="/may-tinh-bang">
                                    <i><img src="https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png" alt="" /></i>
                                    <span>Tablet</span>
                                </a>
                            </li>
                            <li class="has-list">
                            <a href="/phu-kien">
                                    <i><img src="https://cdn.tgdd.vn//content/icon-phone-96x96-2.png" alt="" /></i>
                                    <span>Phụ kiện</span>
                                </a>
                            </li>
                            <li>
                            <a href="/dong-ho-thong-minh-ldp">
                                    <i><img src="https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png" alt="" /></i>
                                    <span>Smartwatch</span>
                                </a>
                            </li>
                            <li>
                            <a href="/accessories">
                                    <i><img src="https://cdn.tgdd.vn//content/watch-icon-96x96.png" alt="" /></i>
                                    <span>Đồng hồ</span>
                                </a>
                            </li>
                            <li>
                            <a href="/pc-may-in">
                                    <i><img src="https://cdn.tgdd.vn//content/icon-pc-96x96.png" alt="" /></i>
                                    <span>PC, Máy in</span>
                                </a>
                            </li>
                            <li>
                            <a href="/may-doi-tra">
                                    <i><img /></i>
                                    <span>Máy cũ giá rẻ</span>
                                </a>
                            </li>
                            <li>
                            <a href="/sim-so-dep">
                                    <i><img/></i>
                                    <span>Sim, Thẻ cào</span>
                                </a>
                            </li>

                            <li>
                            <a href="/catalog">
                            <i><img src='https://icon-library.com/images/icon-filter/icon-filter-5.jpg'/></i>
                                    <span>Lọc sản phẩm</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                

               
        </heaader>

        
    )
}

export default Header
