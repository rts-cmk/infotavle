import SkoleInfo from "../assets/skole";
import { useState, useEffect } from 'react';

export default function Slides() {

    const [Slides, setSlides] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SkoleInfo();
                setSlides(data);
            } catch (error) {
                console.error("Error fetching slides:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const [error, setError] = useState(null);

    return (
        <>

        {console.log(Slides)};
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching slides: {error.message}</p>}
        {Slides && (
            <div>
               {Slides.products.map((slide, index) => (
                    <div key={index} className="slide">
                        <h2>{slide.status}</h2>
                        <p>{slide.description}</p>
                    </div>
                ))}
            </div>
        )}
        </>
    )
}