import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionExpandedProps {
    title: string;
    content: string;
    imageSrc?: string;
}

export default function AccordionExpanded({title, content, imageSrc}: AccordionExpandedProps): React.ReactElement {
    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    component="div"
                    style={{ whiteSpace: 'pre-line' }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                {imageSrc && (
                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <img src={imageSrc} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                )}
            </AccordionDetails>
        </Accordion>
    );
}