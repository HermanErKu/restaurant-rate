import "../styling/Index.css"; // Assuming this is your custom styling
import { Swiper, SwiperSlide } from 'swiper/react';
// Modular style imports for Swiper 6+
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Index = () => {

  /*return (
    <div>
      <h1>Home</h1>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>Page 1 Content</SwiperSlide>
        <SwiperSlide>Page 2 Content</SwiperSlide>
      </Swiper>

      <button className="add-button"></button>
    </div>
  );*/

  return (
    <div className="swiper-container">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          Page 1 Content
        </SwiperSlide>


        <SwiperSlide>
          Page 2 Content
          <button className="add-button"></button>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Index;