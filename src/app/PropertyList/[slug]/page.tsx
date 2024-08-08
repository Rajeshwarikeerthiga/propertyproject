'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../../../components/PropertyCards/PropertyCard';
import styles from '../../../components/PropertyCards/PropertyList.module.css';
import TablePagination from '@mui/material/TablePagination';

interface PropertyInformation {
  title: string;
  description: string;
  address: string;
}

interface PropertyImageInformation {
  image_path: string;
}

interface Property {
  id: string;
  built_area_sq_m: string;
  total_floor: number;
  no_floor: number;
  floor_no: string;
  flat_no: string;
  bedroom: number;
  bathroom: number;
  price: string;
  price_per_sq_ft: string;
  built_year: string;
  property_informations: PropertyInformation[];
  property_image_informations: PropertyImageInformation[];
}

interface PropertyListResponse {
  buyerFilteredProperty: {
    rows: Property[];
    count: number; 
  };
}

const PropertyLists: React.FC = () => {
  const [properties, setProperties] = useState<Property[] | string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalProperties, setTotalProperties] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<PropertyListResponse>(`https://api.respectpropertyowners.com/v1/property/filtered-property-list?direction=DESC&page=${currentPage + 1}&limit=${rowsPerPage}`);
        if (res.data?.buyerFilteredProperty?.rows.length > 0) {
          setProperties(res.data.buyerFilteredProperty.rows);
          setTotalProperties(res.data.buyerFilteredProperty.count); 
        } else {
          setProperties("No properties available.");
        }
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, [currentPage, rowsPerPage]); 

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0); 
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (typeof properties === 'string') {
    return <div>{properties}</div>;
  }

  if (!properties) {
    return <div>Loading...</div>;
  }

  console.log(Math.ceil(totalProperties / rowsPerPage)) 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading1}>
          Property List
        </h2>
      </div>
      <div className={styles.propertyList}>
        {properties.map((property) => {
          const propertyInfo = property.property_informations?.[0];
          const imageSrc = property.property_image_informations?.[0]?.image_path || "Default City";
     
          return (
            <PropertyCard
              key={property.id}
              image={imageSrc}
              title={propertyInfo?.title || "No Title"}
              description={propertyInfo?.description || "No Description"}
              location={propertyInfo?.address || "No Address"}
              details="2 BHK Apartment"
              price={`AED ${property.price}`}
              contact="Contact Owner"
              info={{
                bedroom: `${property.bedroom} Br`,
                bathroom: `${property.bathroom} Bath`,
                area: `${property.built_area_sq_m} Sqft`,
              }}
              slug={property.id}
            />
          );
        })}
      </div>
     
      <TablePagination
        component="div"
        count={Math.ceil(totalProperties / rowsPerPage)} 
        page={currentPage}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[1, 2, 3, 4, 5]}
      />
    </div>
  );
};

export default PropertyLists;
