import React from "react";
import "./Categories.css";
import cate1 from "../../../Assets/Images/tour-1-1.jpg";
import cate2 from "../../../Assets/Images/tour-1-2.jpg";
import cate3 from "../../../Assets/Images/tour-1-3.jpg";
import cate4 from "../../../Assets/Images/tour-1-cover.jpg";
import { NavLink } from "react-router-dom";
// import { ChevronRight } from "@mui/icons-material";

function Categories() {
  return (
    <div className="cateContainer">
      <h1 className="cateHead">AUTO REPAIR SERVICES</h1>
      <hr className="cateHr" />
      <p className="catePara">
        We offer a full range of garage services to vehicle owners located in
        Tucson area. Our professinals know how to handle a wide range of car
        services.
      </p>

      <div className="categoriesContent">
        <div className="categoriesBar">
          <img src={cate1} className="cateImg" alt="" />
          <h1 className="cateName">Hostel Room</h1>
        </div>

        <div className="categoriesBar">
          <img src={cate2} className="cateImg" alt="" />
          <h1 className="cateName">Hostel Room</h1>
        </div>

        <div className="categoriesBar">
          <img src={cate3} className="cateImg" alt="" />
          <h1 className="cateName">Hostel Room</h1>
        </div>
        <div className="categoriesBar">
          <img src={cate4} className="cateImg" alt="" />
          <h1 className="cateName">Hostel Room</h1>
        </div>
      </div>
    </div>
  );
}

export default Categories;
