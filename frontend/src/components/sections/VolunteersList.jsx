import { useEffect, useState } from 'react';
import { HandHeart, Car, House, FileText } from "@phosphor-icons/react";

export default function VolunteersList() {
    const [volunteers, setVolunteers] = useState([]);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    useEffect(() => {
        fetch(`${apiUrl}/api/voluntarios`)
            .then(res => res.json())
            .then(data => setVolunteers(data))
            .catch(err => console.error(err));
    }, []);

    // Função para escolher ícone baseado na opção
    const getIcon = (type) => {
        switch(type) {
            case 'transporte': return <Car size={24} color="#0b7dff" />;
            case 'hospedagem': return <House size={24} color="#0b7dff" />;
            case 'documentacao': return <FileText size={24} color="#0b7dff" />;
            default: return <HandHeart size={24} color="#0b7dff" />;
        }
    };

    return (
        <section className="section container">
            <h2 className="section-title">Rede de Solidariedade</h2>
            <p style={{marginBottom: '2rem', color: '#9aa3b2'}}>Conheça as pessoas que estão oferecendo ajuda agora.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {volunteers.map(vol => (
                    <div key={vol._id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {getIcon(vol.opcao)}
                            <strong style={{ textTransform: 'capitalize' }}>{vol.opcao}</strong>
                        </div>
                        <h4 style={{ margin: 0 }}>{vol.nome}</h4>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', fontStyle: 'italic' }}>
                            "{vol.mensagem || 'Estou disponível para ajudar!'}"
                        </p>
                        <small style={{ color: '#666', marginTop: 'auto' }}>
                            Contato: {vol.email}
                        </small>
                    </div>
                ))}
                
                {volunteers.length === 0 && <p>Nenhum voluntário cadastrado ainda. Seja o primeiro!</p>}
            </div>
        </section>
    );
}