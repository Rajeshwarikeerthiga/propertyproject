"use client";
import React from "react";
import PropertyCard from "./PropertyCard";
import styles from "./PropertyList.module.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import SeeAllPropertiesButton from "./See all properties button";
import axios from "axios";

interface RelatedProperty {
  title: string;
  description: string;
  address: string;
  price: string;
  bedroom: string;
  bathroom: string;
  area: string;
  price_per_sq_ft: string;
  image: string;
  property_informations?: { title: string; description: string; address: string }[];
  property_image_informations?: { image_path: string }[];
  id: string;
}

const PropertyList: React.FC<{ relatedproperties: RelatedProperty[] }> = ({ relatedproperties }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Other Properties in this Project and Nearby
        </h2>
        <div className={styles.custombutton}>
          <SeeAllPropertiesButton />
        </div>
      </div>
      <div className={styles.propertyList}>
        {relatedproperties.map((property, index) => {
          const propertyInfo = property.property_informations?.[0];
          const imageSrc = property.property_image_informations?.[0]?.image_path || "Default City";
          return (
            <PropertyCard
              key={index}
              image={imageSrc}
              title={propertyInfo?.title || property.title}
              description={propertyInfo?.description || property.description}
              location={propertyInfo?.address || property.address}
              details="2 BHK Apartment"
              price={`AED ${property.price}`}
              contact="Contact Owner"
              info={{
                bedroom: `${property.bedroom} Br`,
                bathroom: `${property.bathroom} Bath`,
                area: `${property.price_per_sq_ft} Sqft`,
              }}
              slug={property.id} 
            />
          );
        })}
      </div>
    </div>
  );
};
export default PropertyList;
