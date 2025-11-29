import { X, UserCircle } from "@phosphor-icons/react";

export default function UserProfile({ user, onLogout, onClose }) {
    if (!user) return null;

    // Estilos do Modal (Overlay) - Igual ao Login
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        textAlign: 'center'
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

                <h2 className="section-title" style={{ fontSize: '1.5rem', marginTop: 0, marginBottom: '1.5rem' }}>
                    Meu Perfil
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <UserCircle size={80} color="#0b7dff" weight="light" />
                    
                    <h3 style={{ margin: '10px 0 0 0', fontSize: '1.2rem' }}>{user.nome}</h3>
                    <p style={{ margin: 0, color: '#9aa3b2', fontSize: '0.9rem' }}>{user.email}</p>
                    
                    <div style={{ 
                        marginTop: '1rem', 
                        padding: '6px 12px', 
                        background: 'rgba(11, 125, 255, 0.1)', 
                        color: '#0b7dff', 
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                    }}>
                        Status: Conectado
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        Editar Meus Dados
                    </button>
                    
                    <button 
                        className="btn btn-ghost" 
                        onClick={() => {
                            onLogout();
                            onClose();
                        }}
                        style={{ width: '100%', borderColor: '#333' }}
                    >
                        Sair da Conta
                    </button>
                </div>
            </div>
        </div>
    );
}