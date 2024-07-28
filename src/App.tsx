import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.tsx";
import SurgicalProceduresPage from "./components/SurgicalProcedures/SurgicalProceduresPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/zabiegi-chirurgiczne"} element={<SurgicalProceduresPage />} />
            </Routes>
        </BrowserRouter>
    );
}

