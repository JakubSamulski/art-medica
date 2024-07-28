import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.tsx";
import SurgicalProceduresPage from "./components/SurgicalProcedures/SurgicalProceduresPage.tsx";
import AestheticMedicinePage from "./components/AestheticMedicine/AestheticMedicine.tsx";
import AestheticSurgeryPage from "./components/AestheticSurgery/AestheticSurgeryPage.tsx";
import LocationPage from "./components/Location/Location.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/zabiegi-chirurgiczne"} element={<SurgicalProceduresPage />} />
                <Route path={"/medycyna-estetyczna"} element={<AestheticMedicinePage />}/>
                <Route path={"/chirurgia-estetyczna"} element={<AestheticSurgeryPage />}/>
                <Route path={"/lokalizacja"} element={<LocationPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

