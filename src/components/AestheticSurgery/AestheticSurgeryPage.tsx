import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import './AestheticSurgery.css';
import AccordionExpanded from "../AccrodionExpanded.tsx";
import BaseAccordion from "../Accordion.tsx";
import {
    eyelidsContent,
    eyelidsTitle, faceLiftingContent,
    faceLiftingTitle,
    liposuctionContent,
    liposuctionTitle, protrudingEarsCorrectionContent, protrudingEarsCorrectionTitle
} from "./AestheticSurgeryPageContent.tsx";


export default function AestheticSurgeryPage() {

    return(

        <>
            <div className="navbar-container">
                <ResponsiveAppBar/>
            </div>
            <div className="content-container">
                <div className="top-container">
                    <h2>Medycyna estetyczna</h2>
                </div>
                <div className="accordion-container">
                    <AccordionExpanded title={eyelidsTitle} content={eyelidsContent}/>
                    <BaseAccordion title={liposuctionTitle} content={liposuctionContent}/>
                    <BaseAccordion title={faceLiftingTitle} content={faceLiftingContent}/>
                    <BaseAccordion title={protrudingEarsCorrectionTitle} content={protrudingEarsCorrectionContent}/>
                </div>
            </div>
        </>
    )
}