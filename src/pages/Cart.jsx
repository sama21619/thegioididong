import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'
import LocationForm from '../components/LocationForm'
import Button from '../components/Button'






const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = (e) => {
        setName(e.target.value)

    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleSave = () => {

        if (localStorage) {

            var name = document.getElementById('cusName').value;
            var phone = document.getElementById('cusPhone').value;
            var homeAdd = document.getElementById('homeAdd').value;
            localStorage.setItem('name', name);
            localStorage.setItem('phone', phone);
            localStorage.setItem('homeAdd', homeAdd);

            
        };
        document.getElementById('saveButton').innerText = "Lưu thành công"

    }
    const [homeAdd, setHomeAdd] = useState('');


    const handleHomeAdd = (e) => {
      setHomeAdd(e.target.value);
  
  
    }

  


    // var checkbox = document.getElementsByName("gender");
    // for (var i = 0; i < checkbox.length; i++) {
    //     if (checkbox[i].checked === true) {
    //         alert(checkbox[i].value);
    //     }
    // }

    const showValue = () => {
        const ele = document.forms.elements.elements["gender"].value;
        localStorage.setItem("sex", ele)
    }








    return cartProducts.length ? (





        <Helmet title="Giỏ hàng">




            <br></br>
            <div className='cart-option'>
                <Link to="/">
                    <div className='buymore'>Mua thêm sản phẩm khác</div>

                </Link>
                <div><span>Giỏ hàng của bạn</span></div>

            </div>
            <div className="cart">


                <div className="cart__list popular">
                    {
                        cartProducts.map((item, index) => (

                            <CartItem item={item} key={index} />

                        ))
                    }

                    <div class="infor-customer">
                        <h4>Thông tin khách hàng</h4>
                        <form class="form-customer" id="cusForm">
                            <div class="sex-customer">
                                <form id="elements" onChange={showValue}>
                                <input type="radio" value="Anh" name="gender"  /> Anh
                                <input type="radio" value="Chị" name="gender" /> Chị
                                </form>

                            </div>
                            <div class="fillinform">
                                <div class="fillname">
                                    <input onChange={handleName} value={name} placeholder="Họ và tên" type="text" maxlength="50" id="cusName" name="cusName" required="required" class="capitalize untouched pristine required" />

                                </div>
                                <div class="fillname phoneNumber">
                                    <input onChange={handlePhone} type="tel" value={phone} maxlength="10" id="cusPhone" name="cusPhone" required="required" class="untouched pristine required phoneNumber__input" placeholder="Số điện thoại" />


                                </div>

                            </div>
                        </form>



                    </div>

                    <div class="choosegetgoods">
                        <h4>Chọn cách thức nhận hàng</h4>

                        <div class="click-choose">
                            <input type="radio" value="home"  checked /> Giao hàng tận nơi
                            <input type="radio" value="sm"  /> Nhận tại siêu thị
                        </div>


                        <div class="choose-content current" >
                            <div class="deli-address">

                                <p> Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có) </p>


                                <input onChange={handleHomeAdd} id="homeAdd" value={homeAdd}  type="text" maxLength="225" placeholder="Số nhà, tên đường" />

                                <LocationForm/>

                                

                            </div>
                        </div>



                    </div>


                    <div className='anotheroption'>
                        <div class="customer-note">
                            <input type="text" id="cusNote" name="cusNote" required="required" placeholder='Yêu cầu khác (không bắt buộc)' />

                        </div>

                        <ul>
                            <li>

                                <input type="checkbox" />
                                <span>Gọi người khác nhận hàng (nếu có)</span>

                            </li>
                            <li>

                                <input type="checkbox" />
                                <span>Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm</span>

                            </li>
                            <li>

                                <input type="checkbox" />
                                <span>Xuất hóa đơn công ty</span>

                            </li>



                        </ul>
                        <div>
                           
                        <Button className="save-button"  onClick={handleSave}><p id="saveButton">Lưu thông tin</p></Button>
                        
                        </div>
                    </div>


                    <div class="discountcode">
                        <div className='usecode'>
                            <div className='usecode__icon'>
                                <i className='cartnew-discount'></i>
                            </div>
                            <span className="usecode__title">
                                Sử dụng mã giảm giá

                            </span>

                        </div>
                        <div className='applycode'>
                            <div class="applycode__text-input">
                                <input type="text" placeholder="Nhập mã giảm giá/ Phiếu mua hàng" />

                            </div>
                            <div class="applycode__button">
                                <button> Áp dụng </button>

                            </div>

                        </div>


                    </div>

                    <div class="finaltotal">
                        <div class="area-total">


                            <div class="total-price">
                                <strong>Tổng tiền:</strong>
                                <strong>{numberWithCommas(Number(totalPrice))}</strong>
                            </div>
                            <Link to="/ordersuccess">

                                <button class="submitorder">
                                    <b>Đặt hàng</b>
                                </button>
                            </Link>
                            <small> Bạn có thể chọn hình thức thanh toán sau khi đặt hàng </small>

                        </div>
                    </div>
                </div>




            </div>






        </Helmet>






    ) : (
        <div className='cartempty'>
            <i className='cartnew-empty'></i>
            <span>Không có sản phẩm nào trong giỏ hàng</span>
            <a href="/" className='backhome'>Về trang chủ</a>
            <p>Khi cần trợ giúp vui lòng gọi <a>1800.1060</a> hoặc <a>028.3622.1060</a> (7h30 - 22h) </p>



        </div>
    )
}


export default Cart