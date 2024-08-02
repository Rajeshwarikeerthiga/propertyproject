// components/SeeAllPropertiesButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  border: '1px solid #F1535B',
  color: '#F1535B',
  textTransform: 'none',
  padding: '8px 16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(241, 83, 91, 0.1)',
    borderColor: '#F1535B',
  },
  

}));

const Buttonfamily: React.FC = () => {
  return (
  
    <CustomButton>
    Extended Assistance
    </CustomButton>
  )
};

export default Buttonfamily;