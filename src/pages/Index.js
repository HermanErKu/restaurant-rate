import React, { useState } from 'react';

import "../styling/Index.css"; // Assuming this is your custom styling
import { Swiper, SwiperSlide } from 'swiper/react';
// Modular style imports for Swiper 6+
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="swiper-container">
      <div className="overlaysContainer">
        {activeSlide === 0 ?
          <div className="pageOverlayContainer">
            <b>Spise ute</b>
            <p>Takeaway</p>
          </div>
          :
          <div className="pageOverlayContainer">
            <p>Spise ute</p>
            <b>Takeaway</b>
          </div>
        }
      </div>

      <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}>
        <SwiperSlide>
          Page 1 Content

        </SwiperSlide>


        <SwiperSlide>
          Page 2 Content
          <button className="add-button"></button>

        </SwiperSlide>
      </Swiper>

      <div className="bottomNavbar">
        
      </div>
    </div>
  )
}

export default Index;