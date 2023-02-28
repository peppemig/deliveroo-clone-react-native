import { useState } from "react";
import spring from "../api/spring";

export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null
    })

    const searchCategories = async (term) => {
        setResults({
            data: null,
            loading: true,
            error: null
        })
        try {
            //console.log(term.term)
            const response = await spring.get('/categories')
            setResults({
                data: response.data,
                loading: false,
                error: null
            })
        } catch (error) {
            setResults({
                data: null,
                loading: false,
                error: "Qualcosa è andato storto :(",
            })
        }
    };
    return [results, searchCategories]
};