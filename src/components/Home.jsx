import React,{useEffect,useState} from "react";
import Navbar from "./Navbar";
import "../styles/home.css";
import ReactCardSlider from 
"react-card-slider-component";
import { useNavigate } from "react-router-dom";

import { CiPercent } from "react-icons/ci";
import { Zoom } from "react-slideshow-image";
import { AiFillWallet, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
function Home() {
  const navigate = useNavigate();

  const [restaurants,setRestaurants] = useState([])
  const images = [
    "https://img.freepik.com/free-vector/realistic-burger-chalkboard-background_79603-1042.jpg?w=2000",
    "https://img.freepik.com/free-vector/fast-food-black-background-poster_1284-14589.jpg?w=2000",
    "https://static.vecteezy.com/system/resources/previews/002/759/352/non_2x/healthy-food-poster-vector.jpg",
  ];
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%", height: "80%", borderRadius: "20px" }}
              src={each}
            />
          ))}
        </Zoom>
      </div>
    );
  };
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = [
    {
      image: "https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280",
      title: "Your fav hotel",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      image: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3091%2Ftrend20210322132626.jpg",
      title: "Your fav hotel",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      image: "https://ychef.files.bbci.co.uk/976x549/p07cj8zj.jpg",
      title: "SYour fav hotel",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Your fav hotel",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://deih43ym53wif.cloudfront.net/Golgappa-india-food-shutterstock_1422373154.jpg_9a7621c1bc.jpg",
      title: "Your fav hotel",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*",
      title: "Your fav hotel",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://static.toiimg.com/thumb/msid-9023764,imgsize-32594,width-800,height-600,resizemode-75/9023764.jpg",
      title: "Your fav hotel",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
  ];
  const yourJWTToken = JSON.parse(localStorage.getItem("token"))
  console.log(yourJWTToken)
  const yourConfig = {
    headers: {
       Authorization: "Bearer " + yourJWTToken
    }
 }
 useEffect(()=>{
  axios
  .get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", yourConfig).then( res => {

    // console.log( res.data);
    setRestaurants(res.data)

})
.catch(error => console.log(error))  
 },[])
 console.log(restaurants)

  return (
    <div>
      <Navbar />
      <div className="home-first">
        <div className="home-first-left">
          <h2>Karan</h2>
          <h4>Let's explore this evening</h4>
        </div>
        <div className="home-first-right">
          <div className="h-f-r-sec">
            <CiPercent className="icon1" size={40} color="orange" />
            <h4>Offer</h4>
          </div>
          <div className="h-f-r-sec">
            <AiFillWallet className="icon2" size={40} color="blue" />
            <h4>Wallet</h4>
          </div>
        </div>
      </div>
      <div className="home-second">
        <div className="home-second-first">
          <h3>Your taste</h3>
          <div className="hsfr">
            <h4>See all</h4>
            <AiOutlineRight size={20} />
          </div>
        </div>
        <div className="slider-sec">
          <ReactCardSlider className="sld" slides={slides} />
        </div>
        <div className="sld2">
          <Slideshow />
        </div>
      </div>
      <div className="home-third">
        <h3>Popular tastes</h3>
      </div>
      <div className="list-sec">
     
        {restaurants.map((el)=>{
          return(
<div className="list-sec-f" onClick={()=>{navigate("/restdescript")}}>
          <img
            src={el.images[0].url}
            alt=""
          />
          <div className="list-sec-f-w">
            <h4>{el.restaurant_name}</h4>
            <h6 style={{ color: "gray", fontWeight: "400" }}>
              Cakes,Pastry,Pastas
            </h6>
            <h6 style={{ color: "gray", fontWeight: "400" }}>
              Connaught Place,New Delhi
            </h6>
            <div className="food-offer">
              <CiPercent size={20} color="orange" />
              <h4 style={{ color: "orange", fontWeight: "400" }}>
                4 Offers trending
              </h4>
            </div>
            <div className="last-line">
              <div className="ll">
                <p>
                  <b>✨{el.rating.restaurant_avg_rating}</b>
                </p>
                <h6 style={{ color: "gray", fontWeight: "400" }}>Popularity</h6>
              </div>
              <div className="ll">
                <p>
                  <b>$4.5</b>
                </p>
                <h6 style={{ color: "gray", fontWeight: "400" }}>Popularity</h6>
              </div>
            </div>
          </div>
        </div>
          )
        })}
       
      </div>
    </div>
  );
}

export default Home;
