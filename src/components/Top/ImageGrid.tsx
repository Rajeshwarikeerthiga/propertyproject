
'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import styles from './Images.module.css';

interface ImageSrc {
  is_cover: number;
  image_path: string;
}

interface BasicGridProps {
  property_image_informations: ImageSrc[];
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const BasicGrid: React.FC<BasicGridProps> = ({ property_image_informations }) => {
  const image = property_image_informations?.find(each => each.is_cover === 1)?.image_path || '';
  const otherImages = property_image_informations?.filter(each => each.is_cover !== 1) || [];
  return (
    
    <Box className={styles.container}>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
       
        <div className={styles.seeAllWrapper}>
  <Image 
     src={image} 
      alt="Property"
 
    width={350} 
    height={280} 
    className={styles.seeAllImage}
  />
</div>

        </Grid>
        <Grid item sm={8} xs={12}>
          <Grid container spacing={2}>
            {otherImages.slice(0, 6).map((image, index) => (
              <Grid item xs={4} key={index}>
                <Image 
                  src={image.image_path} 
                  alt={`Image ${index + 1}`} 
                  width={150} 
                  height={140} 
                  className={styles.gridImage}
                />
              </Grid>
            ))}
       
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicGrid;
