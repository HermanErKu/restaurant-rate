import React, { useEffect, useState } from 'react';

import "../styling/Index.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { database } from '../utils/firebase';
import { ref, onValue, set } from 'firebase/database';


const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);



  const [data, setData] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  function sortByRating(ratings) {
    return ratings.sort((a, b) => b.rating - a.rating);
  }  

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, '/');
      await onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        setData(data);
        setRatings(data["ratings"]);
        setRestaurants(data["restaurants"]);
      });
    };

    fetchData();
  }, []);

  if (data) { console.log(data["restaurants"][0]) }
  if (restaurants) { console.log(restaurants[0]) }

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
          <div className="pageContent">
            {data ? sortByRating(ratings).map((rating) => {
              return (
                <div key={rating["ratingID"]} className="ratingCard">
                  <h2>{rating["rating"]}/5 - {restaurants[rating["restaurantID"]]["restaurantName"]}</h2>
                  <p>{rating["orderName"]} - {rating["orderPrice"]}kr</p>
                  <p>{rating["comment"]}</p>
                  <p>{restaurants[rating["restaurantID"]]["restaurantLat"]}, {restaurants[rating["restaurantID"]]["restaurantLong"]}</p>
                  <p></p>
                </div>
              )
            }) : null}

            <button className="add-button"></button>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="pageContent">
            {data ? restaurants.map((restaurant) => {
              return (
                <div key={restaurant["restaurantID"]} className="restaurantCard">
                  <h1>{restaurant["restaurantName"]}</h1>
                  <p>{restaurant["restaurantComment"]}</p>
                  <p>{restaurant["restaurantAddress"]}</p>
                </div>
              )
            }) : null}



          </div>
        </SwiperSlide>
      </Swiper>

      <div className="bottomNavbar">

      </div>
    </div>
  )
}

export default Index;