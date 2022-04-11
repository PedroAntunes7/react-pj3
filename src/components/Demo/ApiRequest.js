import { useEffect,useState } from "react";
import "./ApiRequest.css";

const ApiRequest = () => {
    const [paises, setpaises] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then((response) => response.json())
        .then((data) => setpaises(data));
}, []);

return (
    <select className="seletor">
        {paises &&
         paises.map((pais, i) => {
            return <option key={i}>{pais.name}</option>
        })}
    </select>
);
};

export default ApiRequest;