import React from 'react';
import Image from 'next/image';
import styles from './PropertyCard.module.css';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

interface PropertyCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  details: string;
  price: string;
  contact: string;
  info: {
    bedroom:string;
    bathroom: string;
    area: string
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, description, image, location, details, price, contact, info }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt="Property Image" 
          width={500} 
          height={300} 
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
    
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.location}>
        <AddLocationOutlinedIcon className={styles.icons}/> {location}
      </div>
      <div className={styles.details}>
        <OtherHousesOutlinedIcon className={styles.icons}/>{details}
      </div>
      <div>
        <span className={styles.price}>{price}</span>
        <span className={styles.contact}>{contact}</span>
      </div>
      <hr className={styles.downline}/>
      <div className={styles.info}>
        <span><HotelOutlinedIcon className={styles.icons1}/>{info. bedroom}</span>
        <span><BathtubOutlinedIcon className={styles.icons1}/>{info. bathroom}</span>
        <span><SquareFootOutlinedIcon className={styles.icons1}/>{info.area}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
