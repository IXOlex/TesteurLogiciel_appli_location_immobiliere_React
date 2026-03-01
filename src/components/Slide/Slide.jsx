import { useState } from "react";
import "./Slide.css";

function Slide({ pictures }) {
    const [index, setIndex] = useState(0);

    if (!pictures || pictures.length === 0) return null;

    const next = () => {
        setIndex(prev => (prev + 1) % pictures.length);
    };

    const prev = () => {
        setIndex(prev => (prev - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slideshow">
            <img className="slide-img" src={pictures[index]} alt="logement" />

            {pictures.length > 1 && (
                <>
                    <button className="slide-left" onClick={prev}>
                        <img src="/src/images/arrow_backward.svg" alt="left" />
                    </button>

                    <button className="slide-right" onClick={next}>
                        <img src="/src/images/arrow_forward.svg" alt="right" />
                    </button>

                    <p className="slide-counter">
                        {index + 1} / {pictures.length}
                    </p>
                </>
            )}
        </div>
    );
}

export default Slide;