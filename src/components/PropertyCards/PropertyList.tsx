'use client'
import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './PropertyList.module.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import SeeAllPropertiesButton from './See all properties button'
import axios from 'axios';

interface RelatedProperty {
  title: string;
  description: string;
  address: string;
  price: number;
  bedroom: number;
  bathroom: number;
 area: number;
 image:string;

}

const PropertyList: React.FC<{ relatedproperties: RelatedProperty[] }> = ({ relatedproperties }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Other Properties in this Project and Nearby</h2>
        <div className={styles.custombutton}>
          <SeeAllPropertiesButton />
        </div>
      </div>
      
      <div className={styles.propertyList}>
      {relatedproperties.map((property, index) => {
  const propertyInfo = property.property_informations?.find(each => each); 
  const imageSrc = property.property_image_informations?.find(each => each.image_path)?.image_path || 'Default City';
  return (
    <PropertyCard 
      key={index} 
      image={imageSrc}
      title={propertyInfo?.title} 
      description={propertyInfo?.description}
      location={propertyInfo?.address}
      details='2 BHK Apartment' 
      price={`AED ${property.price}`}
      contact='Contact Owner'
      info={{
        bedroom: `${property.bedroom} Br`, 
        bathroom: `${property.bathroom} Bath`, 
        area: `${property.price_per_sq_ft} Sqft`,
      }}
    />
  );
})}
       
      </div>
    </div>
  );
};

export default PropertyList;

