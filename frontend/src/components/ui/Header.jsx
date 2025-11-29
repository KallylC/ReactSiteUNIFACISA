export default function Header({ user, onLogout, onOpenLogin, onOpenProfile }) {

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <div className="logo" aria-label="Refúgio App">Refúgio App</div>

        <nav className="nav" role="navigation" aria-label="Menu principal">
          <a href="#hero">Início</a>
          <a href="#missao">Missão</a>
          <a href="#historia">Dados</a>
          <a href="#como-ajudamos">Como ajudamos</a>
          <a href="#abrigos">Abrigos</a>
          <a href="#faq">FAQ</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-actions">
          {/* Lógica de Usuário */}
          {user ? (
             <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Olá, {user.nome}</span>
                
                {/* BOTÃO PERFIL AGORA ABRE O MODAL */}
                <button className="btn btn-primary" onClick={onOpenProfile}>Perfil</button>
                
                <button className="btn btn-ghost" onClick={onLogout}>Sair</button>
             </div>
           ) : (
             <>
               <button className="btn btn-ghost" onClick={onOpenLogin}>Entrar</button>
               <a className="btn btn-primary" href="#relatar">Relatar</a>
             </>
           )}
        </div>
      </div>
    </header>
  );
}