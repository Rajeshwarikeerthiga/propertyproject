import React from 'react';
import styles from './Location.module.css';

interface LocationDetail {
  subheading: string;
  definition: string;
}

interface MoreProps {
  address: string;
  city: string;
}

const Location: React.FC<MoreProps> = ({ address, city }) => {
  const details: LocationDetail[] = [
    { subheading: 'Address', definition: address },
    { subheading: 'City', definition: city },
    { subheading: 'Zip/Postal Code', definition: '12345' },
    { subheading: 'State/Country', definition: 'UAE' },
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
      <h3 className={styles.head2}>Location</h3>
  
      {details.map((item, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.subheading}>{item.subheading}</div>
          <div className={styles.definition}>{formatDefinition(item.definition)}</div>
        </div>
      ))}
    </div>
  );
};

export default Location;
