import SkoleInfo from "../assets/skoleklasser";
import { useState, useEffect } from 'react';

export default function Klasser() {
    const [Klasser, setKlasser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SkoleInfo();
                setKlasser(data);
            } catch (error) {
                console.error("Error fetching Klasser:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const [error, setError] = useState(null);
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>

        {console.log(Klasser)};
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching Klasser: {error.message}</p>}
        {Klasser && (
          <div>
             {Klasser}
          </div>
        )}
        </>
    )
}