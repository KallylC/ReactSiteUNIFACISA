/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { X } from "@phosphor-icons/react"; // Certifique-se de ter instalado os ícones

export default function LoginRegister({ onLogin, onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ nome: '', email: '', senha: '', nacionalidade: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const endpoint = isLogin ? '/api/login' : '/api/register';
        
        try {
            const res = await fetch(`http://localhost:3000${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            
            if (res.ok) {
                onLogin(data);
                if (onClose) onClose(); // Fecha o modal após sucesso
            } else {
                setError(data.msg || 'Erro na operação');
            }
        } catch (err) {
            setError('Erro ao conectar com servidor');
        }
    };

    // Estilos do Modal (Overlay)
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Fundo escuro transparente
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    };

    const modalStyle = {
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        background: '#0f1113',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #333',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
    };

    return (
        <div style={overlayStyle}>
            {/* Clica fora para fechar */}
            <div style={{position: 'absolute', inset: 0}} onClick={onClose}></div>

            <div style={modalStyle}>
                <button 
                    onClick={onClose}
                    style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                >
                    <X size={24} />
                </button>

                <h2 className="section-title" style={{ fontSize: '1.5rem', marginTop: 0 }}>
                    {isLogin ? 'Acesse sua conta' : 'Registre-se'}
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {!isLogin && (
                        <>
                            <input className="input-field" name="nome" placeholder="Nome completo" onChange={handleChange} required />
                            <input className="input-field" name="nacionalidade" placeholder="Nacionalidade" onChange={handleChange} />
                        </>
                    )}
                    <input className="input-field" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <input className="input-field" name="senha" type="password" placeholder="Senha" onChange={handleChange} required />

                    {error && <p style={{ color: '#ff4d4d', fontSize: '0.9rem' }}>{error}</p>}

                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>

                <button 
                    onClick={() => setIsLogin(!isLogin)} 
                    style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#0b7dff', cursor: 'pointer', textDecoration: 'underline', width: '100%' }}
                >
                    {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
                </button>

                <style>{`
                    .input-field { padding: 12px; border-radius: 8px; border: 1px solid #333; background: #1a1d21; color: white; width: 100%; }
                `}</style>
            </div>
        </div>
    );
}