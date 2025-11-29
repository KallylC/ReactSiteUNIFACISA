import { useState, useEffect } from 'react';
import { House, Heart, ShieldCheck, Briefcase, Book, MapPin, MagnifyingGlass, Stethoscope, Bell, ChatCircle, Globe, FileText } from "@phosphor-icons/react";

// Componentes de UI
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import ScrollReveal from './components/ui/ScrollReveal';
import BackgroundParticles from './components/ui/BackgroundParticles';

// Componentes de Seção (Mapas, Gráficos)
import StatsChart from './components/sections/StatsChart';
import ShelterMap from './components/sections/ShelterMap';
import NearbyHelp from './components/sections/NearbyHelp';

// Componentes Conectados ao Backend
import VolunteerForm from './components/sections/VolunteerForm';
import VolunteersList from './components/sections/VolunteersList';
import LoginRegister from './components/sections/LoginRegister';
import UserProfile from './components/sections/UserProfile'; // <--- IMPORT NOVO

// Assets
import planetImg from './assets/planeta.png';

function App() {
  const [user, setUser] = useState(null);
  const [activeShelter, setActiveShelter] = useState(null);
  
  // Controle dos Modais
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // <--- NOVO ESTADO

  // 1. Recuperar login salvo ao abrir o site
  useEffect(() => {
    const savedUser = localStorage.getItem('refugio_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 2. Função de Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('refugio_user');
    setIsProfileOpen(false); // Fecha o modal ao sair
  };

  const shelters = [
    { id: 1, name: 'Abrigo Central', lat: -3.7319, lng: -38.5267, address: 'Rua A, 123', phone: '(85) 999', free: 8, total: 50 },
    { id: 2, name: 'Casa Flores', lat: -3.72, lng: -38.54, address: 'Av. Flores, 456', phone: '(85) 888', free: 0, total: 30 },
    { id: 3, name: 'Refúgio Norte', lat: -3.745, lng: -38.52, address: 'Rua B, 890', phone: '(85) 777', free: 12, total: 40 }
  ];

  return (
    <>
      <BackgroundParticles />
      
      {/* HEADER: Passamos as funções para abrir os modais */}
      <Header 
        user={user} 
        onLogout={handleLogout} 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenProfile={() => setIsProfileOpen(true)} // <--- NOVO PROP
      />

      {/* --- MODAIS (Camada superior) --- */}

      {/* 1. Modal Login/Registro */}
      {isLoginOpen && (
        <LoginRegister 
            onLogin={(u) => {
                setUser(u);
                localStorage.setItem('refugio_user', JSON.stringify(u));
            }}
            onClose={() => setIsLoginOpen(false)} 
        />
      )}

      {/* 2. Modal Perfil (NOVO) */}
      {isProfileOpen && user && (
        <UserProfile 
            user={user}
            onLogout={handleLogout}
            onClose={() => setIsProfileOpen(false)}
        />
      )}

      <main>
        {/* HERO */}
        <section id="hero" className="hero container">
          <div className="hero-left">
            <h1 className="hero-title">
              Reconstruindo vidas.<br />
              <span className="hero-impact">Conectando refugiados à sociedade.</span>
            </h1>
            <p className="hero-sub">
              O Refúgio App é uma plataforma de apoio para integração, abrigo e serviços essenciais.
            </p>
            <div className="hero-ctas">
              <button className="cta primary" onClick={() => document.getElementById('abrigos').scrollIntoView()}>Encontrar abrigo</button>
              <button className="cta outline" onClick={() => document.getElementById('mapa').scrollIntoView()}>Solicitar ajuda</button>
            </div>
            
            <ul className="features">
               <li><House size={20} /> <span>Abrigos</span></li>
               <li><Stethoscope size={20} /> <span>Saúde</span></li>
               <li><ShieldCheck size={20} /> <span>Segurança</span></li>
            </ul>
          </div>
          <div className="hero-right">
            <div className="device-mockup">
               <img src={planetImg} alt="Globo" className="floating-img" />
            </div>
          </div>
        </section>

        {/* MISSÃO */}
        <section id="missao" className="section container">
          <h2 className="section-title">Nossa missão</h2>
          <div className="cards">
            <ScrollReveal className="card">
               <Heart className="card-icon" size={32} />
               <h3>Salvar vidas</h3>
               <p>Apoio imediato e encaminhamento para abrigos e serviços médicos.</p>
            </ScrollReveal>
            <ScrollReveal className="card">
               <House className="card-icon" size={32} />
               <h3>Abrigo seguro</h3>
               <p>Lista de abrigos com disponibilidade, requisitos e contatos.</p>
            </ScrollReveal>
            <ScrollReveal className="card">
               <ChatCircle className="card-icon" size={32} />
               <h3>Rede de apoio</h3>
               <p>Conexão com comunidades, voluntários e parceiros locais.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* HISTÓRIA E DADOS */}
        <section id="historia" className="section container">
           <h2 className="section-title">História e dados</h2>
           <div className="grid-2">
              <ScrollReveal>
                <p>
                    O Brasil recebeu crescimento significativo de solicitações de refúgio nas últimas décadas. Em 2024 foram registradas mais de <strong>68.000 solicitações</strong> e atualmente mais de
                    <strong>156.000 pessoas</strong> foram reconhecidas como refugiadas.
                </p>
                <p>O Refúgio App foi criado para reduzir tempo de acolhimento, facilitar acesso a serviços e integrar redes locais.</p>
                <div className="timeline-snippet">
                    <strong>Destaques:</strong>
                    <ul>
                        <li>2000 — ~17.000 solicitações</li>
                        <li>2015 — ~80.000 solicitações</li>
                        <li>2025 — 156.000+ reconhecidos</li>
                    </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <StatsChart />
              </ScrollReveal>
           </div>
        </section>

        {/* COMO AJUDAMOS */}
        <section id="como-ajudamos" className="section container">
            <h2 id="como-title" className="section-title">Como ajudamos</h2>
            <div className="grid-3">
                <ScrollReveal className="feature-card">
                    <MagnifyingGlass className="feature-icon" size={32} />
                    <h4>Encontrar abrigo</h4>
                    <p>Mapa com filtros por capacidade, acessibilidade e serviços.</p>
                </ScrollReveal>
                <ScrollReveal className="feature-card">
                    <Stethoscope className="feature-icon" size={32} />
                    <h4>Atendimento médico</h4>
                    <p>Encaminhamento para unidades de saúde parceiras e triagem inicial.</p>
                </ScrollReveal>
                <ScrollReveal className="feature-card">
                    <Bell className="feature-icon" size={32} />
                    <h4>Ajuda emergencial</h4>
                    <p>Pedido de suporte rápido com prioridade de resposta.</p>
                </ScrollReveal>
                <ScrollReveal className="feature-card">
                    <ChatCircle className="feature-icon" size={32} />
                    <h4>Conectar comunidades</h4>
                    <p>Plataforma para voluntários e grupos locais organizarem ações.</p>
                </ScrollReveal>
                <ScrollReveal className="feature-card">
                    <Globe className="feature-icon" size={32} />
                    <h4>Tradutor integrado</h4>
                    <p>Suporte a múltiplos idiomas para comunicação inicial.</p>
                </ScrollReveal>
                <ScrollReveal className="feature-card">
                    <FileText className="feature-icon" size={32} />
                    <h4>Documentação</h4>
                    <p>Orientações passo a passo para regularização e acesso a direitos.</p>
                </ScrollReveal>
            </div>
        </section>

        {/* GUIA DE ADAPTAÇÃO */}
        <section id="guia" className="section container">
            <h2 id="guia-title" className="section-title">Guia rápido de adaptação ao Brasil</h2>
            <div className="grid-3">
                <ScrollReveal className="guide-card">
                    <h4>CPF</h4>
                    <p>Como obter: orientações e documentos básicos para solicitar o CPF.</p>
                </ScrollReveal>
                <ScrollReveal className="guide-card">
                    <h4>SUS</h4>
                    <p>Como acessar o sistema público de saúde e quais documentos apresentar.</p>
                </ScrollReveal>
                <ScrollReveal className="guide-card">
                    <h4>Transporte</h4>
                    <p>Como usar transporte público, recarga de cartão e opções de mobilidade.</p>
                </ScrollReveal>
                <ScrollReveal className="guide-card">
                    <h4>Educação</h4>
                    <p>Matrícula escolar para crianças, documentos e procedimentos.</p>
                </ScrollReveal>
                <ScrollReveal className="guide-card">
                    <h4>Banco</h4>
                    <p>Opções de contas digitais e documentos necessários para abrir conta.</p>
                </ScrollReveal>
                <ScrollReveal className="guide-card">
                    <h4>Trabalho</h4>
                    <p>Direitos trabalhistas básicos e canais para procurar vagas.</p>
                </ScrollReveal>
            </div>
        </section>

        {/* SEUS DIREITOS */}
        <section id="direitos" className="section container">
            <h2 id="direitos-title" className="section-title">Seus direitos no Brasil</h2>
            <div className="card" style={{ padding: '1rem' }}>
                <ul className="rights-list">
                    <li><strong>Direito ao pedido de refúgio:</strong> qualquer pessoa pode solicitar proteção.</li>
                    <li><strong>Proteção contra deportação:</strong> com pedido em curso existem salvaguardas legais.</li>
                    <li><strong>Direito à saúde (SUS):</strong> acesso a atendimento de emergência.</li>
                    <li><strong>Direito à educação:</strong> matrícula em escolas públicas.</li>
                    <li><strong>Direito ao trabalho:</strong> conforme autorização/regularização.</li>
                </ul>
            </div>
        </section>

        {/* EMERGÊNCIA */}
        <section id="emergencia-steps" className="section container">
            <h2 id="emerg-title" className="section-title">O que fazer em caso de emergência</h2>
            <ol className="emergency-steps">
                <li>Procure um local seguro imediatamente.</li>
                <li>Acione os números de emergência: Polícia (190), SAMU (192), Bombeiros (193).</li>
                <li>Se possível, envie sua localização para alguém de confiança.</li>
                <li>Não separe dos documentos essenciais.</li>
                <li>Procure um abrigo ou unidade de saúde mais próxima.</li>
            </ol>
        </section>

        {/* ABRIGOS MAPA LOCAL */}
        <section id="abrigos" className="section container">
           <h2 className="section-title">Abrigos parceiros</h2>
           <div className="grid-2">
              <div className="shelter-list">
                 {shelters.map(s => (
                   <div key={s.id} className="shelter-item">
                      <strong>{s.name}</strong>
                      <div className="muted">{s.address}</div>
                      <div>Vagas: {s.free}/{s.total}</div>
                      <button className="btn btn-primary" style={{marginTop: '10px'}} onClick={() => setActiveShelter(s)}>
                        Ver no mapa
                      </button>
                   </div>
                 ))}
              </div>
              <div className="map-card">
                 <ShelterMap activeShelter={activeShelter} />
              </div>
           </div>
        </section>

        {/* MAPA GOOGLE */}
        <NearbyHelp />

        {/* ONGS PARCEIRAS */}
        <section id="parceiros" className="section container">
            <h2 className="section-title">ONGs e parceiros</h2>
            <div className="partners">
                <div className="partner"><strong>ACNUR</strong></div>
                <div className="partner"><strong>Médicos Sem Fronteiras</strong></div>
                <div className="partner"><strong>Cruz Vermelha</strong></div>
                <div className="partner"><strong>Cáritas</strong></div>
                <div className="partner"><strong>IMDH</strong></div>
            </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section container">
            <h2 className="section-title">Perguntas frequentes</h2>
            <div className="faq-list">
                <details>
                    <summary>Como faço para pedir refúgio?</summary>
                    <div className="faq-answer">Procure uma unidade da Polícia Federal ou um posto de atendimento indicado e peça orientação.</div>
                </details>
                <details>
                    <summary>Quanto tempo demora o processo?</summary>
                    <div className="faq-answer">O tempo varia por caso; mantenha contato com órgãos oficiais e busque assistência jurídica.</div>
                </details>
                <details>
                    <summary>Posso trabalhar enquanto aguardo o reconhecimento?</summary>
                    <div className="faq-answer">Dependendo da autorização, pode haver caminhos para regularização.</div>
                </details>
            </div>
        </section>

        {/* LISTA DE VOLUNTÁRIOS (Backend) */}
        <VolunteersList />

        {/* ATENÇÃO: Seção fixa de perfil removida, agora usa o Modal UserProfile acima */}

        {/* FORMULÁRIO DE VOLUNTARIADO (Backend) */}
        <VolunteerForm />

        {/* CONTATO */}
        <section id="contato" className="section container">
            <h2 className="section-title">Contato</h2>
            <div className="grid-2">
                <div>
                    <p>Email: <a href="mailto:contato@refugio.app">contato@refugio.app</a></p>
                    <p>Telefone: (85) 99999-0000</p>
                </div>
                <div>
                    <p>Quer nos apoiar? <a href="#voluntariado">Se inscreva como voluntário</a>.</p>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;