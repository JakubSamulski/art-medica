import './HomePage.css';
import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import Tata from "../../assets/Tata.webp";
import OutlinedCard from "../Card.tsx";
import InfoSection from "../InfoSection/Info.tsx";

export default function HomePage() {
    return (
        <>
            <div className="navbar-container">
                <ResponsiveAppBar/>
            </div>
            <div className="top-container">
                <h1>Art Medica</h1>
            </div>
            <div className="center-container">
                <h2>Lek. med. Zbigniew Samulski</h2>
            </div>
            <div className="center-container">
                <h3>Gabinet chirurgii i medycyny estetyczne</h3>
            </div>
            <div className="center-container">
                <img src={Tata}/>
            </div>
            <div className="cards-container">
                <OutlinedCard items={["Usuwanie zmian skórnych","Korekta blizn","Konsultacje chirurgiczne","tbd"]} title={"Różne zabiegi Chirurgiczne"}/>
                <OutlinedCard items={["Botoks","Mezoterapia","Nici PDO i haczykowe","Osocze/Fibryna"]} title={"Zabiegi medycyny estetycznej"}/>
                <OutlinedCard items={["Powieki górne i dolne","Liposukcja","Lifting twarzy","Korekcja odstających uszu"]} title={"Zabiegi chirurgii estetycznej"}/>
            </div>
            <InfoSection text={''} />

        </>
    );
}