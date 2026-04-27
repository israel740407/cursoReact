import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppView from "./views/AppView";
import OtraView from "./views/OtraView";
import AmigoView from "./views/AmigoView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/main' element = {<AppView />}/>
                    <Route path='/otra' element = {<OtraView />}/>
                    <Route path="/amigo" element = {<AmigoView/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}