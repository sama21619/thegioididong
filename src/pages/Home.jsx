import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import pay1 from '../assets/images/pay1.jpg'
import pay2 from '../assets/images/pay2.png'
import pay3 from '../assets/images/pay3.png'
import pay4 from '../assets/images/pay4.jpg'
import pay5 from '../assets/images/pay5.png'
import pay6 from '../assets/images/pay6.png'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import banner from '../assets/images/Tagline-Deal-ngon-moi-ngay-Desk-1200x95.png'
import quangcao1 from '../assets/images/quangcao1.png'
import quangcao2 from '../assets/images/quangcao2.png'
import quangcao3 from '../assets/images/quangcao3.png'
import quangcao4 from '../assets/images/quangcao4.png'
import brand1 from "../assets/images/brand1.png"
import brand2 from "../assets/images/brand2.png"
import brand3 from "../assets/images/brand3.png"
import bigdeal1 from "../assets/images/bigdeal1.png"
import bigdeal2 from "../assets/images/bigdeal2.jpg"
import bigdeal3 from "../assets/images/bigdeal3.jpg"
import tech1 from "../assets/images/tech1.jpg"
import tech2 from "../assets/images/tech2.jpg"
import tech3 from "../assets/images/tech3.jpg"
import techadv from "../assets/images/techadv.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";







const Home = () => {
   

   

    
    return (
        
        <Helmet title="Trang chủ">

            <Section>
                <SectionBody>
                <Slider 
                      dots={true}
                      
                      infinite={true}
                      slidesToShow={2}
                      slidesToScroll={2}
                      autoplay={true}
                      autoplaySpeed={2000}
                     
                      
                >
               
 
                   
                        <img src={quangcao1}   alt="" />
                        <img src={quangcao2}   alt="" />
                        <img src={quangcao3}   alt="" />
                        <img src={quangcao4}   alt="" />
                    
                    </Slider>
                </SectionBody>
            </Section>
            
            {/* policy section */}
            <Section>
                <SectionBody>
               
 
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >

                     

                        
                        {
                            policy.map((item, index) => <a key={index} href={`${item.link}`}>
                                <PolicyCard
                                    name={item.name}
            
                                    icon={item.icon}
                                />
                            </a>)
                        }
                       
                    </Grid>
                </SectionBody>
            </Section>

            <div>
        
      </div>
            {/* end policy section */}

            {/* best selling section */}
            <div class="popular">
            <Section>
                <SectionTitle>
                <br></br>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
               
                
                <SectionBody>
               
 
                    
                        
      
                      <Slider 
                      dots={true}
                      infinite={true}
                      slidesToShow={5}
                      slidesToScroll={5}
                      autoplay={true}
                      autoplaySpeed={2000}
                      
                >
                    
                    
                     
                        {
                            productData.getProducts(15).map((item, index) => (
                                

                               
                                
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />

                                
                               
                            ))
                        }
                        </Slider>
                        
                    
                    
                </SectionBody>
               
               
              
            </Section>
            </div>
            {/* end best selling section */}

            {/* new arrival section */}


            <Section>
                <SectionTitle>
                       Giảm thêm khi thanh toán online
                </SectionTitle>
                <SectionBody>
                <Slider 
                      dots={true}
                      infinite={true}
                      slidesToShow={3}
                      slidesToScroll={3}
                      autoplay={true}
                      autoplaySpeed={2000}
                      
                >
                    <img src={pay1} alt="" />
                    <img src={pay2} alt="" />
                    <img src={pay3} alt="" />
                    <img src={pay4} alt="" />
                    <img src={pay5} alt="" />
                    <img src={pay6} alt="" />
                    </Slider>


                </SectionBody>

            </Section>
            <div className='deal-shock'>
            <Section>
                
                <SectionTitle>
                    <br></br>
                    <div className="icon__thor">
                   
                       
                   
                    <h3> <img  width="32" height="70" src="//cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/lightning-ic.png" alt="" /> GIỜ VÀNG DEAL SỐC </h3>
                    <div className='time'>
                    <div  class="time__detail"style={{width: "40px" ,height: "40px" ,background:"black",color:"#fff",margin:"0 0 0 5px"}}>12</div>
                    <span class="span-time">:</span>
                    <div class="time__detail" style={{width: "40px" ,height: "40px" ,background:"black",color:"#fff",margin:"0 0 0 5px"}}>00</div>
                    <span class="span-time">:</span>
                    <div class="time__detail" style={{width: "40px" ,height: "40px" ,background:"black",color:"#fff",margin:"0 0 0 5px"}}>00</div>
                    </div>
                    </div>
                    
                </SectionTitle>
                
                <SectionBody>
               
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >

                    


                        {
                            productData.getProducts(10).map((item, index) => (
                                    


                    

                                
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                               
                               
                               
                               
                            ))
                        }
                    
                    </Grid>
                    
                </SectionBody>
            </Section>
            </div>
            {/* end new arrival section */}
            
            {/* banner */}
            <div className='deal-ngon'>
            <Section >
                <SectionBody>
                    <Link to="/catalog">
                        <img width="1920"  src={banner} alt="" />
            <Section>
           
                          

                            
              
                <SectionBody>
                    
                    <Grid 
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(10).map((item, index) => (
                                <ProductCard 
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
    
            </Section>
                    </Link>
                </SectionBody>
                
            </Section>
            </div>
            {/* end banner */}

            {/* popular product section */}
            <div className="popular">
            <Section>
                <SectionTitle>
                <br></br>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(20).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            </div>
            {/* end popular product section */}
          
            <Section>
                <SectionTitle>
                <br></br>
                        24H CÔNG NGHỆ
                </SectionTitle>
                <SectionBody>
                    <div className='tech__container'>
                    <div class="tech_content" style={{padding:"40px"}}>
                        <div className='tech__24h'>
                            <a href='https://www.thegioididong.com/tin-tuc/nhung-mau-dien-thoai-5g-re-nhat-tai-the-gioi-di-dong-1365358'><img className='tech-img' src={tech1} alt=""/><span class="span__tech">Gọi tên loạt điện thoại 5G rẻ nhất tại TGDĐ, sở hữu thiết kế thu hút, cấu hình mạnh mẽ</span></a>
                            <a href='https://www.thegioididong.com/tin-tuc/cach-tat-thong-bao-ung-dung-tren-dien-thoai-samsung-1443778'><img className='tech-img' src={tech2} alt=""/><span class="span__tech">Cách tắt thông báo ứng dụng trên điện thoại Samsung để hạn chế bị làm phiền</span></a>
                            <a href='https://www.thegioididong.com/tin-tuc/red-magic-7s-va-7s-pro-ra-mat-sd8-gen-1-sac-135w-1446482'><img className='tech-img' src={tech3} alt=""/><span className='span__tech'>Red Magic 7S, 7S Pro ra mắt: SD8+ Gen 1, sạc nhanh 135W, cải thiện làm mát</span></a>
                        </div>
                    </div>

                    <div className='tech__adv'>
                        <a href='https://www.thegioididong.com/daily'><img className='tech__adv-img' src={techadv} alt=""/></a>

                    </div>
                    </div>
                </SectionBody>
            </Section>
        

            
            <Section>
                <SectionTitle>
                <br></br>
                        CHUYÊN TRANG THƯƠNG HIỆU
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        <a href='https://www.thegioididong.com/samsung'><img className='brand-img' src={brand1} alt=""/></a>
                        <a href='https://www.avakids.com/'><img className='brand-img' src={brand2} alt=""/></a>
                        <a href='https://www.thegioididong.com/lenovo'><img className='brand-img' src={brand3} alt=""/></a>
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                <br></br>
                CHUỖI MỚI DEAL KHỦNG
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        <a href='https://www.topzone.vn/'><img className='hot__deal-img' src={bigdeal1} alt="" /></a>
                        <a href='https://www.avakids.com/'><img className='hot__deal-img' src={bigdeal2} alt="" /></a>
                        <a href='https://www.avasport.com/'><img className='hot__deal-img' src={bigdeal3} alt="" /></a>
                    </Grid>
                </SectionBody>
            </Section>
           
        </Helmet>
    )
}

export default Home
