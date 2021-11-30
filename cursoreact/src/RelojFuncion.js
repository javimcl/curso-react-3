import { useState, useEffect } from "react";

const RelojFuncion = props => {
    console.log("Efect");
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => {
            console.log("cambio");
            setHora(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }

    }, []);

    return (
        <div>
            <h1> Son las: {hora.toLocaleTimeString()}</h1>
        </div>
    );
}

export default RelojFuncion;