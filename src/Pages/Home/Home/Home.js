import React from 'react';
import useProductsHook from '../../../ProductsHook/useProductsHook';
import Banner from '../Banner/Banner';
import sectionimg from '../../../Image/section1warehousenetwork.png'
import logisticsService from '../../../Image/Banner/logistics-service.jpg'
import SixProducts from '../SixProducts/SixProducts';
import './Home.css'
const Home = () => {
    const [spiceProducts, setSpiceProducts] = useProductsHook();
    return (
        <div >
            <Banner></Banner>
            <div id='product' className='homeSixProduct-container '>

                {/* home part is not responsive now  */}
                {
                    spiceProducts.slice(0, 6).map(spiceProduct => <SixProducts
                        key={spiceProduct._id}
                        spiceProduct={spiceProduct}
                    ></SixProducts>)
                }

            </div>
            <div className='home-section'>
                <div >
                    <img style={{ width: '200px ' }} src={sectionimg} alt="" />
                </div>
                <div className='w-50'>
                    <h3 >We have three large warehouse were
                        we  Stored our goods.We have also good network with other warehouse owner in need can store our more goods their warehouse. </h3>
                </div>
            </div>

            <div className='home-section'>

                <div className='w-50'>
                    <h3>Logistics management is one of the essential elements of supply chain management that is used to fulfil customer needs and demands by planning, controlling, and executing this effective movement. Logistics management is the management of the complete flow of goods and their particular services. </h3>
                </div>
                <div className='' >
                    <img style={{ width: '200px ' }} src={logisticsService} alt="" />
                </div>
            </div>

        </div >
    );
};

export default Home;