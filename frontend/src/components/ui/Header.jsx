import { useState } from 'react';

export default function Header() {
  const [activeLang, setActiveLang] = useState('pt');

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
          <div className="lang-switch">
            <button 
              className={`lang ${activeLang === 'pt' ? 'active' : ''}`} 
              onClick={() => setActiveLang('pt')}
            >🇧🇷</button>
            <button 
              className={`lang ${activeLang === 'en' ? 'active' : ''}`} 
              onClick={() => setActiveLang('en')}
            >🇺🇸</button>
            <button 
              className={`lang ${activeLang === 'es' ? 'active' : ''}`} 
              onClick={() => setActiveLang('es')}
            >🇸🇦</button>
          </div>

          <a className="btn btn-ghost" href="#entrar">Entrar</a>
          <a className="btn btn-primary" href="#relatar">Relatar</a>
        </div>
      </div>
    </header>
  );
}