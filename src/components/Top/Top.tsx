"use client";
import React from "react";
import "./Top.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";

import Buttonfamily from "./Exsistence Button";
import ContactButton from "./Contact Button";
import Save from "./Save Button";

const Top = ({
  title,
  localityName,
  listType,
  createdAt,
  bedRoom,
  bathRoom,
  feet,
  year,
  price,
  priceSqft,
}:any) => {
  return (
    <div className={"layoutContainer"}>
      <div className={"leftDiv"}>
        <p className={"breadcrumb"}>
          Home/NewDelhi/South West Delhi/Uttam Nagar/Preeti smart Homes
        </p>
        <div className={"titleContainer"}>
          <h2 className={"title"}>{title}</h2>
          <Save  />
        </div>
        <div>
          <p className={"info"}>
            <span className={"item"}>
              <FmdGoodOutlinedIcon className={"icons"} /> {localityName}
            </span>
            <span>|</span>
            <span className={"item"}>
              <FiberManualRecordIcon className={"icons"} /> {listType}
            </span>
            <span>|</span>
            <span className={"item"}>
              <AccessTimeOutlinedIcon className={"icons"} /> {createdAt}
            </span>
          </p>
          <p className={"info"}>
            <CottageOutlinedIcon className={"icons"} /> 2BHK Apartment
            <HotelOutlinedIcon className={"icons"} /> {bedRoom} Br
            <BathtubOutlinedIcon className={"icons"} /> {bathRoom} Bath
            <SquareFootOutlinedIcon className={"icons"} /> {feet} SqFt
            <DateRangeIcon className={"icons"} /> Year Built {year}
          </p>
        </div>
      </div>
      <div className={"rightDiv"}>
        <span className={"text"}>
          <h4 className={"Price"}>AED {price} </h4>
          <p className={"priceNegotiable"}>Price Negotiable</p>
        </span>
        <p className={"price2"}>AED {priceSqft} Sq.ft</p>
        <span className={"imageRow"}>
          <Buttonfamily  />
          <ContactButton  />
        </span>
      </div>
    </div>
  );
};

export default Top;
