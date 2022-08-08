import React from 'react'
import Grid from './Grid'




const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        
                        <div className="footer__content">
                            <ul class="f-listmenu">
                                <li><a href="https://www.thegioididong.com/tin-tuc/chuong-trinh-tich-diem-danh-cho-khach-hang-than-thiet-1434806">Tích điểm Quà tặng VIP</a></li>
                                <li><a href="https://www.thegioididong.com/lich-su-mua-hang/dang-nhap"> Lịch sử mua hàng</a></li>
                                <li><a href="https://www.thegioididong.com/daily"> Cộng tác bán hàng cùng TGDĐ</a></li>
                                <li><a href="https://www.thegioididong.com/tra-gop">Tìm hiểu về mua trả góp</a></li>
                                <li><a href="https://www.thegioididong.com/bao-hanh">Chính sách bảo hành</a></li>
                            </ul>
                            
                            
                            
                            
                            
                        </div>
                    </div>
                    <div>
                       
                        <div className="footer__content">

                        <ul class="f-listmenu">
                                <li><a href="https://www.thegioididong.com/tin-tuc/chuong-trinh-tich-diem-danh-cho-khach-hang-than-thiet-1434806">Giới thiệu công ty (MWG.vn)</a></li>
                                <li><a href="https://vieclam.thegioididong.com/"> Tuyển dụng</a></li>
                                <li><a href="https://www.thegioididong.com/lien-he"> Gửi góp ý, khiếu nại</a></li>
                                <li><a href="https://www.thegioididong.com/he-thong-sieu-thi-the-gioi-di-dong">Tìm siêu thị (3.190 shop)</a></li>
                                <li><a href="https://www.thegioididong.com/">Xem bản mobile</a></li>
                            </ul>
                          
                        </div>
                    </div>
                    <div>
                        
                        <div className="footer__content">
                           <p>Tổng đài hỗ trợ (Miễn phí gọi)</p>
                           <p>Gọi mua: <strong>1800.1060</strong> (7:30 - 22:00)</p>
                           <p>Kỹ thuật: <strong>1800.1763</strong> (7:30 - 22:00)</p>
                           <p>Khiếu nại: <strong>1800.1062</strong> (8:00 - 21:30)</p>
                           <p>Bảo hành: <strong>1800.1064</strong> (8:00 - 21:00)</p>

                        </div>
                    </div>
                    <div className="footer__about">
                        <div class="f-social">
                        <a href="https://www.facebook.com/thegioididongcom" class="link-fb"><i class="icon-facebook"></i> 
                    3740.8k Fan
                </a>
                        <a href="https://www.youtube.com/user/TGDDVideoReviews" class="link-ytb"><i class="icon-youtube"></i>
                    846k Đăng ký
                </a>
                        </div>
                        <div class="f-certify">
                            <a href="http://online.gov.vn/Home/WebDetails/20090"><i class="icon-congthuong"></i></a>
                            <a href="https://www.thegioididong.com/tos#giai-quyet-khieu-nai"><i class="icon-khieunai"></i></a>
                            <a href="https://www.dmca.com/Protection/Status.aspx?ID=5b62e759-2a0c-4d86-b972-af903bfbc89d&refurl=https://www.thegioididong.com/"><i class="icon-protected"></i></a>
                            <a href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/thegioididongcom-1632835473"><img width="70" src="https://tinnhiemmang.vn/handle_cert?id=thegioididong.com" alt="" /></a>
                        </div>
                        <p>
                        Website cùng tập đoàn
                        </p>
                       <ul className='footer__logo-list'>
                        <li><a href='https://www.topzone.vn/'><i class="iconlogo-topzone"></i></a></li>
                        <li><a href="https://www.dienmayxanh.com/"><i class='iconlogo-dienmayxanh'></i></a></li>
                        <li><a href="https://www.bachhoaxanh.com/"><i class='iconlogo-bachhoaxanh'></i></a></li>
                        <li><a href="https://www.nhathuocankhang.com/"><i class='iconlogo-ankhang'></i></a></li>
                        <li><a href="https://www.avakids.com/"><i class='iconlogo-kids'></i></a></li>
                        <li><a href="https://www.avasport.com/"><i class='iconlogo-sport'></i></a></li>
                        <li><a href="https://www.dichvutantam.com/"><i class='iconlogo-tantam'></i></a></li>
                        <li><a href="https://www.4kfarm.com/"><i class='iconlogo-4kfarm'></i></a></li>
                        <li><a href="https://vieclam.thegioididong.com/"><i class='iconlogo-vieclam'></i></a></li>
                       </ul>
                    </div>
                </Grid>

                <div class="copyright">
                    <section>
                        <p>
                © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.<br/>
                
                Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. 
                <a href="Xem chính sách sử dụng">Xem chính sách sử dụng</a></p>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer
