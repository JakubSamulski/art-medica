import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import './SurgicalProceduresPage.css';
import AccordionExpanded from "../AccrodionExpanded.tsx";
import {
    plasticSurgeryConsultationsContnent,
    plasticSurgeryConsultationsTitle,
    removalOfSkinContent,
    removalOfSkinTitle,
    scarCorrectioncontent,
    scarCorrectionTitle, surgicalConsultationContent, surgicalConsultationTitle
} from "./SurgicalProceduresPageContent.tsx";
import BaseAccordion from "../Accordion.tsx";

export default function SurgicalProceduresPage() {

    return(

        <>
            <div className="navbar-container">
                <ResponsiveAppBar/>
            </div>
            <div className="content-container">
                <div className="top-container">
                    <h2>Zabiegi chirurgiczne</h2>
                </div>
                <div className="accordion-container">
                    <AccordionExpanded title={removalOfSkinTitle} content={removalOfSkinContent} />
                    <BaseAccordion title={scarCorrectionTitle} content={scarCorrectioncontent} />
                    <BaseAccordion title={surgicalConsultationTitle} content={surgicalConsultationContent} />
                    <BaseAccordion title={plasticSurgeryConsultationsTitle} content={plasticSurgeryConsultationsContnent} />
                </div>
            </div>
        </>
    )
}