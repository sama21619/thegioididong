import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'

import Section, { SectionTitle, SectionBody } from '../components/Section'

import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'

const Smartwatch = () => {
    return (
        <Helmet title="Phone">
            
            {/* policy section */}
          
            {/* end policy section */}

            {/* best selling section */}
            <div class="popular">
            <Section>
                <SectionTitle>
                    <br/>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProductsByCategorySlug('smart-watch').map((item, index) => (
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
            {/* end best selling section */}

            {/* new arrival section */}
         
            {/* end popular product section */}
        </Helmet>
    )
}

export default Smartwatch
