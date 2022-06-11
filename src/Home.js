import React from 'react';
import "./Home.css";
import logo from './AVD-8688_SADLP_Intl_TheTick_SeriesLaunch_ROW_Image_Right_FT.jpg';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
        
        <div className='home__container '>
                <img src={logo} className="home__image" alt="logo" />
        
                <div className="home__row ">
            
                    <Product id ="12321341"
                    title="The Lean startup: How constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={20.76}
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"  />
                    <Product id ="49538094"
                    title="Kenwood kMix Stand Mixer for Baking , Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    price={239.0}
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/716kTJI4jtL._SX425_.jpg"  />
                   
            
          
                </div>
                <div className="home__row ">
                <Product id ="4903850"
                    title="Apple Watch
                    Midnight Aluminium Case with Sport Band" 
                    price={859}
                    rating={4} 
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/45-nc-alum-midnight-sport-gray-s7?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631855766000"  />
                <Product id ="24567868"
                    title="Amazon Echo Dot (3rd Gen) - New and Improved Smart Speaker with Alexa, Black" 
                    price={399}
                    rating={3} 
                    image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"  />
                <Product id ="65213489"
                    title="Buy iPad Pro|12.9-inch iPad Pro|Silver|128GB1|Wi-Fi" 
                    price={1099}
                    rating={5} 
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617126619000"  />
                </div>
                <div className="home__row ">
                <Product id ="7821345"
                    title="86cm (34) Gaming Monitor with WQHD resolution" 
                    price={600}
                    rating={5} 
                    image="https://images.samsung.com/is/image/samsung/p6pim/in/lc34g55twwwxxl/gallery/in-odyssey-g5-34g5-lc34g55twwwxxl-467164472?$1300_1038_PNG$"  />
                </div>
        </div>
    </div>
  )
}

export default Home