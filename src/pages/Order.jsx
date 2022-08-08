import React, { useContext } from 'react'
import Helmet from '../components/Helmet'
import yesicon from '../assets/images/yes1.png'
import noicon from '../assets/images/no111.png'
import { userContext } from './Cart'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'
import { Link } from 'react-router-dom'


const Order = (props) => {


    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])






    const cartItems = useSelector((state) => state.cartItems.value)

    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {

        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))

    }, [cartItems])

    const id =Math.floor( Math.random()*100000000);

    var name = localStorage.getItem('name');
    var phone = localStorage.getItem('phone');
    var sex = localStorage.getItem('sex');
    var city = localStorage.getItem('city');
    var district = localStorage.getItem('district');
    var ward = localStorage.getItem('ward');
    var homeAdd = localStorage.getItem('homeAdd');



    React.useEffect(() => {

       

        if (name != "undefined" && name != "null") {
            document.getElementById('userName').innerHTML = name;
            document.getElementById('customerPhone').innerHTML = phone;
        }
    }, []
    )

    const handleConfirm = () => {
        localStorage.clear();
        alert("Mua hàng thành công !")
    }





    return (
        <Helmet title="Đơn hàng">



            <div className="order">
                <div className="alertsuccess-new">
                    <i class="new-cartnew-success"></i>
                    <strong>Đặt hàng thành công</strong>
                </div>
                <div className="ordercontent">
                    <div>
                        <p>Cảm ơn {sex} <b>{name}</b>  đã cho Thế Giới Di Động cơ hội được phục vụ. </p>


                    </div>
                    <div>
                        <div className="info-order">
                            <div class="info-order-header">
                                <h4>Đơn hàng: <span>#{id}</span> </h4>
                                <div className="header-right">
                                    <a href="/lich-su-mua-hang">Quản lý đơn hàng</a>
                                    <div class="cancel-order-new">
                                        <div>
                                            <div class="cancel-order-new">
                                                <span>.</span>
                                                <a href="">Hủy</a>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <label htmlFor="">
                                <span>
                                    <i class="info-order__dot-icon"></i>
                                    <span>
                                        <strong>Người nhận hàng: </strong>
                                        <h4 id="userName"></h4>
                                        <br/>
                                        <strong>Số điện thoại: </strong>
                                        <h4 id="customerPhone"></h4>
                                    </span>
                                </span>


                            </label>
                            <label htmlFor="">
                                <span>
                                    <i class="info-order__dot-icon"></i>
                                    <span>
                                        <strong>Giao đến: </strong>
                                         {homeAdd}, {ward}, {district}, Thành phố {city}(nhân viên sẽ gọi xác nhận trước khi giao).
                                    </span>
                                </span>
                            </label>
                            <label htmlFor="">
                                <span>
                                    <i class="info-order__dot-icon"></i>
                                    <span>
                                        <strong>Tổng tiền: </strong>
                                        <b class="red">{numberWithCommas(Number(totalPrice))}</b>
                                    </span>
                                </span>
                            </label>


                        </div>
                    </div>

                    <div>
                        <h4 class="order-infor-alert">
                            Đơn hàng chưa được thanh toán
                        </h4>


                    </div>

                    <div className="payment-method-new">
                        <div>
                            <h3 >
                                Chọn hình thức thanh toán:
                            </h3>
                            <ul class="formality-pay-new">
                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="cash" name="payment" />
                                                <label htmlFor='cash'>Thanh toán tiền mặt khi nhận hàng</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="ck" name="payment" />
                                                <label htmlFor='ck'>Chuyển khoản ngân hàng</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="atm" name="payment" />
                                                <label htmlFor='atm'>Qua thẻ ATM (có Internet Banking)</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="qr" name="payment" />
                                                <label htmlFor='qr'>Qua QR Code</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="momo" name="payment" />
                                                <label htmlFor='momo'>Ví MoMo</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="visa" name="payment" />
                                                <label htmlFor='visa'>Qua thẻ quốc tế Visa, Master, JCB</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="moca" name="payment" />
                                                <label htmlFor='moca'>Qua Ví điện tử Moca trên Grab</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>
                                <li class="normal-payment">
                                    <a href="">

                                        <div class="text-payment">
                                            <span>
                                                <input type="radio" id="machine" name="payment" />
                                                <label htmlFor='machine'>Nhân viên mang máy cà thẻ khi nhận hàng</label>
                                            </span>

                                        </div>
                                    </a>
                                </li>

                            </ul>
                            <Link to="/">

                                <button className="confirm-payment-button" onClick={handleConfirm}> Xác nhận </button>
                            </Link>
                        </div>
                        <div className="refund-popup">
                            <a href="">Xem chính sách hoàn tiền online</a>
                        </div>
                        <hr />

                        <div className="buyanotherNew">
                            <a href="/"> Mua thêm sản phẩm khác </a>

                        </div>
                        <span class="customer-rating">
                            <div class="customer-rating__top">
                                <div className="customer-rating__top__desc">
                                    Anh Sang có hài lòng về trải nghiệm mua hàng?
                                </div>
                                <div className="customer-rating__top__rating-buttons">
                                    <button class="customer-rating__top__rating-buttons__good">
                                        <img src={yesicon} alt="" />
                                        <p>Hài lòng</p>
                                    </button>
                                    <button className="customer-rating__top__rating-buttons__bad">
                                        <img src={noicon} alt="" />
                                        <p>Không hài lòng</p>
                                    </button>

                                </div>

                            </div>

                        </span>

                    </div>

                </div>





            </div>
        </Helmet>



    )
}

export default Order;