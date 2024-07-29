import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css';

interface BaseAccordionProps {
    title: string;
    content: string;
    imageSrc?: string;
}

export default function BaseAccordion({ title, content, imageSrc }: BaseAccordionProps) {
    return (
        <div>
            <Accordion elevation={1} sx={{ marginBlock: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
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
        </div>
    );
}