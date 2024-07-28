import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import './SurgicalProceduresPage.css';

export default function SurgicalProceduresPage() {
    return(
        <>
            <div className="navbar-container">
                <ResponsiveAppBar/>
            </div>
            <div className="top-container">
                <h2>Zabiegi chirurgiczne</h2>
            </div>
        </>
    )
}