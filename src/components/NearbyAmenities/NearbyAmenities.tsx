'use client'
import React from 'react';
import styles from './NearbyAmenities.module.css';

interface AmenityInfo {
  amenity_name: string;
}

interface Amenity {
  amenityinfos: AmenityInfo[];
  image: string; 
}

interface NearbyAmenitiesProps {
  data: Amenity[];
}

const NearbyAmenities: React.FC<NearbyAmenitiesProps> = ({ data }) => {
  return (
    <div className={styles.layout}>
      <h3 className="head3">Nearby Amenities</h3>
      <div className={styles.column}>
        {data.map((amenity, index) => (
          <div key={index} className={styles.amenity}>
            <img src={amenity.image} alt="Amenity Image" className={styles.icon} />
            {amenity.amenityinfos.map((info, infoIndex) => (
              <div key={infoIndex} className={styles.amenityItem}>
                <span className={styles.amenityText}>{info.amenity_name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyAmenities;




