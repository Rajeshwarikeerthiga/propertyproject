// components/SeeAllPropertiesButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { styled } from '@mui/material/styles';
import './Top.css'

const CustomButton = styled(Button)(({ theme }) => ({
  border: '1px solid #797C88',
  color: '#1A222B',
  textTransform: 'none',
  padding: '8px 16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(241, 83, 91, 0.1)',
    borderColor: '#F1535B',
  },
}));

const Save: React.FC = () => {
  return (
    <Box sx={{ marginLeft: '20px'}}>
    <CustomButton fullWidth >
    <FavoriteBorderOutlinedIcon sx ={{ color: '#F1535B' }} />Save
    </CustomButton>
    </Box>
  );
};

export default Save;