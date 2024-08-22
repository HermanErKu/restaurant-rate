import React, { useEffect, useState } from 'react';

import "../styling/Index.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { database } from '../utils/firebase';
import { ref, onValue } from 'firebase/database';


const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);



  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, '/');
      await onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        setData(data);
      });
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="swiper-container">
      <div className="overlaysContainer">
        {activeSlide === 0 ?
          <div className="pageOverlayContainer">
            <b>Ratings</b>
            <p>Restaurants</p>
          </div>
          :
          <div className="pageOverlayContainer">
            <p>Ratings</p>
            <b>Restaurants</b>
          </div>
        }
      </div>

      <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}>
        <SwiperSlide>
          <div className="page1Content">



            <button className="add-button"></button>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="page2Content">



          </div>
        </SwiperSlide>
      </Swiper>

      <div className="bottomNavbar">

      </div>
    </div>
  )
}

export default Index;