import "./Collapse.css";
import { useRef, useState, useEffect } from "react";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
    if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
    }
        }, [isOpen, children]);

    return (
        <div className="collapse">
            <div
                className="collapse-header"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <h3>{title}</h3>
                <i className={`fa-solid fa-chevron-up ${isOpen ? "open" : ""}`}></i>
            </div>

            <div
                className={`collapse-content ${isOpen ? "open" : ""}`}
                style={{ maxHeight: isOpen ? height + "px" : "0px" }}
            >
                <div ref={contentRef} className="collapse-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Collapse;