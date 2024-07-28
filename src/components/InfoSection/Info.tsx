import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface GreenSectionProps {
    text: string;
}

const InfoSection: React.FC<GreenSectionProps> = () => {
    return (
        <Box sx={{ backgroundColor: '#189F9B', py: 4,marginTop: 5 }}>
            <Container maxWidth="lg">
                <Typography variant="h5" align="center" color="white">
                    <h2>Kontakt</h2>
                    <h3>Ul. Paderewskiego 76b, Gorzów Wielkopolski, Polska</h3>
                    <h4>Boczne wejście po lewej stronie budynku</h4>
                    <h4>Email: zbigsam@gmail.com</h4>
                    <h4>Telefon/SMS/Whatsapp: 515 247 843</h4>
                </Typography>
            </Container>
        </Box>
    );
};

export default InfoSection;