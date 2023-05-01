import React, { useEffect, useRef, useState } from "react";
import imagen from "../assets/imagen.png";
import "./ImagenTexto.css";

const ImagenTexto = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref}>
            <div className="imagen-texto-container">
                <div className="imagen-container">
                    <img
                        src={imagen}
                        className={`img-fluid ${isVisible ? "animate__animated animate__fadeInLeft" : ""
                            }`}
                        alt="Imagen"
                    />
                </div>
                <div
                    className={`texto-container ${isVisible ? "animate__animated animate__fadeInUp" : ""
                        }`}
                >
                    <h2 className="mb-3">Título del texto</h2>
                    <p className="lead">
                        Julio una vez se fue de viaje por Cuzco, y de pronto se encontro con un animal salvaje que trataba de seguirlo sin que Julio se diera cuenta. Cuando de repente doblando una esquina de arboles, cerca a un rio, Julio se percata del animal que esta atras de el, luego de eso empezaron a pelear. La pelea estaba muy reñida, pues el animal era un oso de tamaño medio. Julio cae y lastima su rodilla en una piedra ya pasando el rio. Pero al caer se topa con un tronco que utiliza para golpear al oso y hacer que huya. Julio se salvo por poquitoooo jajajaja
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImagenTexto;
