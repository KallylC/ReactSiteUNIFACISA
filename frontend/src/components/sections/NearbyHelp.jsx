import { useState } from 'react';

export default function NearbyHelp() {
    const [searchQuery, setSearchQuery] = useState("hospital perto de mim");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <section className="mapa-ajuda section container" id="mapa">
            <h2 className="section-title">Encontre Ajuda Perto de Você</h2>
            <p>Selecione o tipo de serviço que deseja localizar no mapa.</p>

            <div className="mapa-botoes">
                <button onClick={() => handleSearch("delegacia perto de mim")}>🚔 Delegacia</button>
                <button onClick={() => handleSearch("hospital perto de mim")}>🏥 Hospital</button>
                <button onClick={() => handleSearch("abrigo para refugiados")}>🏨 Abrigo</button>
                <button onClick={() => handleSearch("posto de saude")}>🧑‍⚕️ Saúde</button>
                <button onClick={() => handleSearch("assistencia social")}>🆘 Assistência</button>
            </div>

            <iframe
                id="mapa-iframe"
                className="mapa-frame"
                src={iframeSrc}
                allowFullScreen
                loading="lazy"
                title="Mapa de Ajuda"
            ></iframe>
        </section>
    );
}