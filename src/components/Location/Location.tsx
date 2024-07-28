import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import office from "../../assets/Office.png"

export default function LocationPage() {

    return(

        <>
            <div className="navbar-container">
                <ResponsiveAppBar/>
            </div>
            <div className="content-container">
                <div className="top-container">
                    <h2>Lokalizacja</h2>
                </div>
                <div className="center-container">
                    <img src={office}/>
                </div>
                <div className="center-container">
                    <h3> Ul. Paderewskiego 76B Gorzów Wielkopolski</h3>
                </div>
                <div className="center-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d603.6985498816986!2d15.25030316969419!3d52.75394799825771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47072027db33712d%3A0xa4ba86de0dbb172f!2sPaderewskiego%2076%2C%2066-400%20Gorz%C3%B3w%20Wielkopolski!5e0!3m2!1spl!2spl!4v1722186558708!5m2!1spl!2spl"
                        width="100%"
                        height="500"
                        style={{ border: 0, marginBottom: 100}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </div>
        </>
    )
}