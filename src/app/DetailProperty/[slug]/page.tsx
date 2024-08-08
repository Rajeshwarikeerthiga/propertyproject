'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import More from '../../../components/More/More';
import NearbyAmenities from '../../../components/NearbyAmenities/NearbyAmenities';
import PropertyList from '../../../components/PropertyCards/PropertyList';
import styles from '../../page.module.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ImageGrid from '../../../components/Top/ImageGrid';
import Top from '../../../components/Top/Top';
import Location from '../../../components/Location/Location';
import Link from 'next/link';

interface PropertyImageInfo {
    image_path: string;
    is_cover?: number; 
  }
  
  interface ImageSrc {
    is_cover: number;
    image_path: string;
  }
  
  interface PropertyInfo {
    title: string;
    description: string;
    address: string;
  }
  
  interface LocalityInfo {
    locality_name: string;
  }
  
  interface FurnishingInfo {
    name: string;
    description?: string; 
  }
  
  interface CityInfo {
    city_name: string;
  }
  
  interface Property {
    property_informations: PropertyInfo[];
    locality: {
      localityinfos: LocalityInfo[];
    };
    listing_type: string;
    createdAt: string;
    bedroom: string;
    bathroom: string;
    built_area_sq_m: string;
    built_year: string;
    price: string;
    price_per_sq_ft: string;
    property_image_informations: PropertyImageInfo[];
    property_identifier: string;
    user: {
      name: string;
    };
    furnishing: {
      furnishing_informations: FurnishingInfo[];
    };
    total_floor: string;
    floor_no: string;
    amenities: any[];
    city: {
      cityinfos: CityInfo[];
    };
  }
  
  interface RelatedProperty {
    id: string;
    slug: string; 
    title: string;
    description: string;
    address: string;
    price: string;
    bedroom: string;
    bathroom: string;
    area: string;
    image: string;
    price_per_sq_ft: string;
  }
  
  interface ApiResponse {
    property: Property;
    related_properties: RelatedProperty[];
  }
  
  const SlugPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
    const [data, setData] = useState<ApiResponse | string | null>(null); 
    const [error, setError] = useState<string | null>(null); 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<ApiResponse>(`https://admin-api.respectpropertyowners.com/web-all-properties/${params.slug}`);
          if (response.data?.property) {
            setData(response.data);
          } else {
            setData("Property is not available"); 
          }
        } catch (error) {
          setError('Error fetching data. Please try again later.');
          console.error('Error fetching the data', error);
        }
      };
  
      fetchData();
    }, [params.slug]);
  
    if (error) {
      return <div>{error}</div>; 
    }
  
    if (typeof data === 'string') {
      return <div>{data}</div>; 
    }
  
    if (!data) {
      return <div>Loading...</div>; 
    }
  
    const propertyInformation: PropertyInfo | undefined = data.property?.property_informations?.find(each => each);
    const localityInfo: LocalityInfo | undefined = data.property?.locality?.localityinfos?.find(each => each);
    const cityInfo: CityInfo | undefined = data.property?.city?.cityinfos?.find(each => each);
    const relatedproperties: RelatedProperty[] = data?.related_properties || [];
  
    const imageSrc: ImageSrc[] = (data.property?.property_image_informations || []).map((image: PropertyImageInfo) => ({
      is_cover: image.is_cover ?? 0, 
      image_path: image.image_path,
    }));
  
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.mainContainer}>
        <div className={styles.topContainer}>
          <Top
            title={propertyInformation?.title || 'Default Title'} 
            localityName={localityInfo?.locality_name || 'Default Locality'} 
            listType={data.property.listing_type || 'Default List Type'}
            createdAt={data.property.createdAt || 'Default Created Date'}
            bedRoom={data.property.bedroom || 'Default Bed Room'} 
            bathRoom={data.property.bathroom || 'Default Bath Room'} 
            feet={data.property.built_area_sq_m || 'Default Feet'} 
            year={data.property.built_year || 'Default Year'} 
            price={data.property.price || 'Default Price'} 
            priceSqft={data.property.price_per_sq_ft || 'Default Price Sqft'} 
          />
          <ImageGrid property_image_informations={imageSrc} />
        </div>
        <div className={styles.moreContainer}>
          <More 
            propertyIdentifier={data.property.property_identifier || 'Default ID'} 
            price={data.property.price || 'Default Price'} 
            priceSqft={data.property.price_per_sq_ft || 'Default Price Sqft'} 
            builtArea={data.property.built_area_sq_m || 'Default Sq Unit'} 
            name={data.property.user.name || 'Default Name'}
            localityName={localityInfo?.locality_name || 'Default Locality'} 
            address={propertyInformation?.address || 'Default Address'}
            furnish={data.property.furnishing.furnishing_informations?.find(each => each)?.name || 'Default Furnish'}
            totalFloor={data.property.total_floor || 'Default TotalFloor'}
            floorNo={data.property.floor_no || 'Default FloorNo'}
          />
        </div>
        <div className={styles.nearbyAmenitiesContainer}>
          <NearbyAmenities data={data.property.amenities} />
        </div>
        <div className={styles.locationContainer}>
          <Location 
            address={propertyInformation?.address || 'Default Address'} 
            city={cityInfo?.city_name || 'Default City'} 
          />
        </div>
        <div className={styles.propertyListContainer}>
          <PropertyList relatedproperties={relatedproperties} />
        </div>
        </div>
        <Footer />
    
      </div>
    );
  };
  
  export default SlugPage;