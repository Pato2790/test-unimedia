import { useEffect, useState } from "react";

const useFetch = (baseUrl: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl() {
        const response = await fetch(baseUrl);
        const json = await response.json();
        setData(Array.isArray(json) ? json : [json]);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return { data, loading };
}

export default useFetch;