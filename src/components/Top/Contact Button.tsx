
import React from 'react';
import { Button } from '@mui/material';

import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  border: '1px solid #F1535B',
  color: 'white',
  textTransform: 'none',
  padding: '8px 16px',
  fontWeight: 'bold',
  backgroundColor: '#E55959', 
  '&:hover': {
    backgroundColor: 'rgba(241, 83, 91, 0.1)',
    borderColor: '#F1535B',
  },
}));

const ContactButton: React.FC = () => {
  return (
    <CustomButton>
    Contact Seller
    </CustomButton>
  );
};

export default ContactButton;