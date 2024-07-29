import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import './AestheticMedicine.css';
import AccordionExpanded from "../AccrodionExpanded.tsx";
import forehead from "../../assets/forehead.webp"
import {
    botoxContent,
    botoxTitle, fibrinContent,
    fibrinTitle, mesotherapyContent, mesotherapyTitle,
    pdoStringsContent,
    pdoStringTitle
} from "./AestheticMedicinePageContent.tsx";
import BaseAccordion from "../Accordion.tsx";


export default function AestheticMedicinePage() {

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
                    <AccordionExpanded title={botoxTitle} content={botoxContent} imageSrc={forehead}/>
                    <BaseAccordion title={mesotherapyTitle} content={mesotherapyContent}/>
                    <BaseAccordion title={pdoStringTitle} content={pdoStringsContent}/>
                    <BaseAccordion title={fibrinTitle} content={fibrinContent}/>
                </div>
            </div>
        </>
    )
}