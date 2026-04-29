import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppView from "./views/AppView";
import OtraView from "./views/OtraView";
import AmigoView from "./views/AmigoView";
import ParamView from "./views/ParamView";
import ProductsView from "./views/ProductsView";
import ProductLayout from "./layouts/ProductLayout";
import CreateProductView from "./views/CreateProductView";
import MainView from "./views/MainView";
import EditProductView from "./views/EditProductView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/main' element = {<AppView />}/>
                    <Route path='/otra' element = {<OtraView />}/>
                    <Route path="/amigo" element = {<AmigoView/>}/>
                    <Route path='/parametro/:id' element = {<ParamView/>}/>

                </Route>

                <Route element={<ProductLayout />}>
                    <Route path='/' element={<MainView />} />
                    <Route path='/products' element={<ProductsView />} />
                    <Route path='/products/create' element={<CreateProductView />} />
                    <Route path='/products/:id' element={<EditProductView />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}