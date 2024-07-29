import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface OutlinedCardProps {
    title: string;
    items: string[];
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({ title, items }) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h3" component="div" sx={{ mb: 3, minHeight: '120px', display: 'flex', }}>
                    {title}
                </Typography>
                <Typography component="ul" sx={{ pl: 4 }}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                marginBottom: index < items.length - 1 ? '1rem' : 0,
                                fontSize: '1.5rem'
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                >
                    Więcej
                </Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ maxWidth: 500, height: '100%' }}>
            <Card variant="outlined" sx={{ height: '100%' }}>{card}</Card>
        </Box>
    );
}

export default OutlinedCard;