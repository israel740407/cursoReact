import { apiUrl } from "../apiService";

export const getProducts = async () =>{
    try {
        const response = await fetch(`${apiUrl}/products`);
        console.log("Esta es mi primera respuesta", response)
        const data = await response.json();
        console.log("Esta es mi data ", data)
        return data;
    } catch (error) {
        console.error("Error al obtener datos", error)
        return [];
    }


}

export const getByProductId = async (id) =>{
    try {
        const response = await fetch(`${apiUrl}/products/${id}`);
        console.log("Esta es mi primera respuesta", response)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener datos", error)
        return [];
    }


}

export const createProduct = async (product) => {
        try {
            const response = await fetch(`${apiUrl}/products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'apllication/json',
            },
            body: JSON.stringify(product)
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al cargar el producto", data)
            return null;
        }
    }

    export const updateProduct = async (id, product) => {
        try {
            const response = await fetch(`${apiUrl}/products/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'apllication/json',
            },
            body: JSON.stringify(product)
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al cargar el producto", error) //revisar
            return null;
        }
    }

    export const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/products`,{
            method: 'DELETE'
            })
            return response.ok;
        } catch (error) {
            console.error("Error al cargar el producto", error)
            return null;
        }
    }