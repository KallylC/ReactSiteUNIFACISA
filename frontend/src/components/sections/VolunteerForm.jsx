import { useState } from 'react';

export default function VolunteerForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        opcao: '',
        mensagem: ''
    });
    const [status, setStatus] = useState(''); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

        try {
            // Conecta com o backend na porta 3000
            const response = await fetch(`${apiUrl}/api/voluntarios`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Sucesso! Obrigado por se inscrever.');
                // Limpa o formulário
                setFormData({ nome: '', email: '', opcao: '', mensagem: '' });
                
                // Opcional: Atualiza a página após 2 segundos para o novo voluntário aparecer na lista
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setStatus(data.error || 'Erro ao enviar. Tente novamente.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Erro de conexão com o servidor.');
        }
    };

    return (
        <section id="voluntariado" className="section container">
            <h2 className="section-title">Voluntariado</h2>
            <p className="reveal">Quer ajudar? Inscreva-se como voluntário e escolha entre doações, transporte, acolhimento temporário ou suporte documental.</p>

            <form className="vol-form reveal" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Seu nome" 
                    value={formData.nome}
                    onChange={handleChange}
                    required 
                />
                
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                
                <select 
                    name="opcao" 
                    value={formData.opcao} 
                    onChange={handleChange} 
                    required
                >
                    <option value="">Escolha uma opção</option>
                    <option value="doacao">Doação de itens</option>
                    <option value="transporte">Transporte</option>
                    <option value="hospedagem">Hospedagem temporária</option>
                    <option value="documentacao">Apoio documental</option>
                </select>
                
                <textarea 
                    name="mensagem" 
                    placeholder="Mensagem (opcional)"
                    value={formData.mensagem}
                    onChange={handleChange}
                ></textarea>
                
                <button type="submit" className="btn btn-primary">Enviar inscrição</button>
                
                {status && (
                    <div style={{ 
                        marginTop: '1rem', 
                        padding: '10px', 
                        borderRadius: '8px',
                        background: status.includes('Sucesso') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 77, 77, 0.1)',
                        color: status.includes('Sucesso') ? '#4caf50' : '#ff4d4d',
                        border: `1px solid ${status.includes('Sucesso') ? '#4caf50' : '#ff4d4d'}`
                    }}>
                        {status}
                    </div>
                )}
            </form>
        </section>
    );
}