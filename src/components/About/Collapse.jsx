import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse2">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Collapse;