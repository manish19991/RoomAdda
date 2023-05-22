import React, { useState, useEffect } from "react";
import "./Banner.css";
import img1 from "../../../Assets/Images/tour-1-1.jpg";
import img2 from "../../../Assets/Images/tour-1-2.jpg";
import img3 from "../../../Assets/Images/tour-1-3.jpg";
import img4 from "../../../Assets/Images/tour-1-cover.jpg";

// import axios from "axios";

const images = [
  {
    images: img1,
    head: "Fixing Truck Since 1990",
    content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
    quae, veritatis, tenetur atque doloremque corporis similique tempora
    `,
  },
  {
    images: img2,
    head: "Repairing cars since 1966",
    content: `Ut enim ad minim veniam cos, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eax ea commodo consequat.`,
  },
  {
    images: img3,
    head: "Having fun and profit since 1977",
    content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
    quae, veritatis`,
  },
];

function Banner() {
  // const [banner, setBanner] = useState(null);

  // const [bgImages, setBgImages] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // const formData = new FormData();
  // formData.append("API_KEY", "Abc@123@");
  // formData.append("AUTH_KEY", "1AUTH1675143335");
  // useEffect(() => {
  //   axios
  //     .post("https://miraajewel.com/API/Web/banner/all", formData, {
  //       headers: { "Content-Type": "multipart/from-data" },
  //     })
  //     .then((res) => {
  //       setBanner(res.data.data);
  //     });
  //     console.log(banner)
  // }, []);

  // // useEffect (()=>{
  // //   setBanner(imgData);
  // // },[])
  // // console.log(banner);

  // useEffect(() => {
  //   setTimeout(() => {
  //     banner?.length - 1 === bgImages
  //       ? setBgImages(0)
  //       : setBgImages(bgImages + 1);
  //   }, 3000);
  // }, [bgImages]);
  return (
    <div>
      <div className=" bannerContainer">
        <img
          // src={bgImf[bgImages]?.bg}
          src={images[currentIndex].images}
          className="bannerImg"
          loading="lazy"
        />
        <div className="bannerTextBar">
          <h1 className="bannerText">{images[currentIndex].head}</h1>
          <p className="bannerPara">{images[currentIndex].content}</p>
        </div>
        <div className="readBtn">
          <p className="btnText">Read More </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
