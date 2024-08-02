'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import More from '../components/More/More';
import NearbyAmenities from '../components/NearbyAmenities/NearbyAmenities';
import PropertyList from '../components/PropertyCards/PropertyList';
import styles from './page.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ImageGrid from '../components/Top/ImageGrid';
import Top from '../components/Top/Top';
import Location from '@/components/Location/Location';

const Home: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://admin-api.respectpropertyowners.com/web-all-properties/4');
      const fetchedData = response.data;
      setData(fetchedData);
      console.log('Fetched Data:', fetchedData);
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  const propertyInformation = data.property.property_informations.find((each:any) => each);
  const localityInfo =data.property.locality.localityinfos.find((each:any) => each);
  const relatedproperties = data.related_properties;
  const imageSrc = data.property.property_image_informations 
  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <div>
          <Top
            title={propertyInformation.title || 'Default Title'} 
            localityName={localityInfo.locality_name || 'Default Locality'} 
            listType={data.property.listing_type || 'Default List Type'}
            createdAt={data.property.createdAt || 'Default Created Date'} 
            bedRoom={data.property.bedroom || 'Default Bed Room'} 
            bathRoom={data.property.bathroom || 'Default Bath Room'} 
            feet={data.property.built_area_sq_m || 'Default Feet'} 
            year={data.property.built_year || 'Default Year'} 
            price={data.property.price || 'Default Price'} 
            priceSqft={data.property.price_per_sq_ft || 'Default Price Sqft'} 
          />
          <ImageGrid 
          property_image_informations={imageSrc} />
        </div>
        <div className={styles.moreContainer}>
          <More 
            propertyIdentifier={data.property.property_identifier || 'Default ID'} 
            price={data.property.price || 'Default Price'} 
            priceSqft={data.property.price_per_sq_ft || 'Default Price Sqft'} 
            builtArea={data.property.built_area_sq_m || 'Default Sq Unit'} 
            name={data.property.user.name || 'Default Name'}
            localityName={localityInfo.locality_name || 'Default Locality'} 
            address={propertyInformation.address || 'Default Address'}
            furnish={data.property.furnishing.furnishing_informations[0].name || 'Default Furnish'}
            totalFloor={data.property.total_floor || 'Default TotalFloor'}
            floorNo={data.property.floor_no || 'Default FloorNo'}
          />
        </div>
        <div className={styles.nearbyAmenitiesContainer}>
          <NearbyAmenities data={data.property.amenities} />
        </div>
        <div className={styles.locationContainer}>
          <Location 
            address={propertyInformation.address || 'Default Address'} 
            city={data.property.city.cityinfos?.find((each:any) => each.city_name).city_name || 'Default City'} 
          />
        </div>
        <div className={styles.propertyListContainer}>
          <PropertyList 
     relatedproperties={relatedproperties}
     />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

