import { useEffect, useState } from "react";
import "../../styles/components/headerSlider.scss";

export default function HeaderSlider() {
    const [index, setIndex] = useState(0);

    const images = [
        "header1618x200.jpg",
        "header21920x200.jpg",
        "header3.jpg",
    ];

    // Auto-slide every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div
                className="slider-container"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div className="slide" key={i}>
                        <img src={src} alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
