import React from 'react';
import styles from './More.module.css';
interface MoreProps {
  propertyIdentifier: string;
  price: string;
  priceSqft: string;
  builtArea: string;
  name: string;
  localityName: string;
  address: string;
  furnish: string;
  totalFloor: string;
  floorNo: string;
}

const More: React.FC<MoreProps> = ({
  propertyIdentifier,
  price,
  priceSqft,
  builtArea,
  name,
  localityName,
  address,
  furnish,
  totalFloor,
  floorNo
}) => {
  const definitions = [
    { subheading: "Price Breakup", definition: `AED ${price} | AED ${priceSqft} Stamp Duty, Registration Charges | AED ${builtArea} Sq.Unit Monthly` },
    { subheading: "Booking Amount", definition: `AED ${price}` },
    { subheading: "Prop ID", definition: propertyIdentifier },
    { subheading: "Property Owner Name", definition: name },
    { subheading: "Address", definition: address },
    { subheading: "Locality", definition: localityName },
    { subheading: "Furnishing", definition: furnish },
    { subheading: "Total Floors", definition: totalFloor },
    { subheading: "Floor No", definition: floorNo },
    { subheading: "Property Facing", definition: "(North East)" },
  ];
  const formatDefinition = (definition: string) => {
    const parts = definition.split(/(\([^)]+\))/).filter(Boolean);
    return parts.map((part, index) =>
      part.startsWith('(') && part.endsWith(')') ? (
        <span key={index} className={styles.bold}>{part.slice(1, -1)}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={styles.layout}>
      <h3 className={styles.head2}>More Details</h3>

      {definitions.map((item, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.subheading}>{item.subheading}</div>
          <div className={styles.definition}>
            {typeof item.definition === 'string' ? formatDefinition(item.definition) : item.definition}
          </div>
        </div>
      ))}
    </div>
  );
};

export default More;
