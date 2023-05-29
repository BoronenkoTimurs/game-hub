import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}
interface FetchGenresResonose {
    count: number;
    results: Genre[];
}

const useGengres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const contoller = new AbortController();
        setLoading(true);

    apiClient
        .get<FetchGenresResonose>("/genres", {signal: contoller.signal})
        .then((res) => {
            setGenres(res.data.results)
            setLoading(false)
        })    
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
        });
        return () => contoller.abort();
    }, []);
    return {genres, error, isLoading};
};

export default useGengres;
    
