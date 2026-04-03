import "./Collapse.css";
import { useRef, useState, useEffect } from "react";// Importation des styles et des hooks nécessaires pour le composant de collapse

function Collapse({ title, children }) {// Composant de collapse pour afficher du contenu de manière rétractable
    const [isOpen, setIsOpen] = useState(false);// État pour gérer l'ouverture ou la fermeture du collapse
    const [height, setHeight] = useState(0);// État pour stocker la hauteur du contenu du collapse
    const contentRef = useRef(null);// Référence pour accéder au contenu du collapse

    useEffect(() => {// Met à jour la hauteur du contenu lorsque le collapse est ouvert ou que les enfants changent
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen, children]);

    return (// Rendu du composant de collapse
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