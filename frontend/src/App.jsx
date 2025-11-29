import { useState } from 'react';
import { House, Heart, ShieldCheck, Briefcase, Book, MapPin, MagnifyingGlass, Stethoscope, Bell, ChatCircle, Globe, FileText } from "@phosphor-icons/react";

// Components
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import ScrollReveal from './components/ui/ScrollReveal';
import BackgroundParticles from './components/BackgroundParticles'; // Verifique se o caminho está correto
import StatsChart from './components/sections/StatsChart';
import ShelterMap from './components/sections/ShelterMap';
import NearbyHelp from './components/sections/NearbyHelp';
import planetImg from './assets/planeta.png';

function App() {
  const [activeShelter, setActiveShelter] = useState(null);

  const shelters = [
    { id: 1, name: 'Abrigo Central', lat: -3.7319, lng: -38.5267, address: 'Rua A, 123', phone: '(85) 999', free: 8, total: 50 },
    { id: 2, name: 'Casa Flores', lat: -3.72, lng: -38.54, address: 'Av. Flores, 456', phone: '(85) 888', free: 0, total: 30 },
    { id: 3, name: 'Refúgio Norte', lat: -3.745, lng: -38.52, address: 'Rua B, 890', phone: '(85) 777', free: 12, total: 40 }
  ];

  return (
    <>
      <BackgroundParticles />
      <Header />

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
              <button className="cta outline">Solicitar ajuda</button>
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
                        <li>2010 — ~34.000 solicitações</li>
                        <li>2015 — ~80.000 solicitações</li>
                        <li>2020 — ~115.000 solicitações</li>
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
        <section id="guia" class="section container" aria-labelledby="guia-title">
            <h2 id="guia-title" class="section-title">Guia rápido de adaptação ao Brasil</h2>

            <div class="grid-3">
                <div class="guide-card reveal">
                    <h4>CPF</h4>
                    <p>Como obter: orientações e documentos básicos para solicitar o CPF.</p>
                </div>

                <div class="guide-card reveal">
                    <h4>SUS</h4>
                    <p>Como acessar o sistema público de saúde e quais documentos apresentar.</p>
                </div>

                <div class="guide-card reveal">
                    <h4>Transporte</h4>
                    <p>Como usar transporte público, recarga de cartão e opções de mobilidade.</p>
                </div>

                <div class="guide-card reveal">
                    <h4>Educação</h4>
                    <p>Matrícula escolar para crianças, documentos e procedimentos.</p>
                </div>

                <div class="guide-card reveal">
                    <h4>Banco</h4>
                    <p>Opções de contas digitais e documentos necessários para abrir conta.</p>
                </div>

                <div class="guide-card reveal">
                    <h4>Trabalho</h4>
                    <p>Direitos trabalhistas básicos e canais para procurar vagas.</p>
                </div>
            </div>
        </section>

        {/* SEUS DIREITOS */}
        <section id="direitos" className="section container" aria-labelledby="direitos-title">
            <h2 id="direitos-title" className="section-title">Seus direitos no Brasil</h2>

            <div className="card" style={{ padding: '1rem' }}>
                <ul className="rights-list">
                    <li><strong>Direito ao pedido de refúgio:</strong> qualquer pessoa pode solicitar proteção.</li>
                    <li><strong>Proteção contra deportação:</strong> com pedido em curso existem salvaguardas legais.</li>
                    <li><strong>Direito à saúde (SUS):</strong> acesso a atendimento de emergência e, em muitos casos, atenção primária.</li>
                    <li><strong>Direito à educação:</strong> matrícula em escolas públicas para crianças e jovens.</li>
                    <li><strong>Direito ao trabalho:</strong> conforme autorização/regularização.</li>
                    <li><strong>Ajuda jurídica:</strong> procurar ONGs e defensorias públicas para orientação.</li>
                </ul>
            </div>
        </section>

        {/* EMERGÊNCIA: PASSO A PASSO */}
        <section id="emergencia-steps" class="section container" aria-labelledby="emerg-title">
            <h2 id="emerg-title" class="section-title">O que fazer em caso de emergência</h2>

            <ol class="emergency-steps">
                <li>Procure um local seguro imediatamente.</li>
                <li>Acione os números de emergência: Polícia (190), SAMU (192), Bombeiros (193).</li>
                <li>Se possível, envie sua localização para alguém de confiança ou para a equipe de apoio.</li>
                <li>Não separe dos documentos essenciais quando for possível mantê-los seguros.</li>
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

        {/* MAPA GOOGLE (IFRAME) */}
        <NearbyHelp />

       {/* ONGs PARCEIRAS */}
        <section id="parceiros" class="section container" aria-labelledby="parceiros-title">
            <h2 id="parceiros-title" class="section-title">ONGs e parceiros</h2>

            <div class="partners reveal">
                <div class="partner"><strong>ACNUR</strong></div>
                <div class="partner"><strong>Médicos Sem Fronteiras</strong></div>
                <div class="partner"><strong>Cruz Vermelha</strong></div>
                <div class="partner"><strong>Cáritas</strong></div>
                <div class="partner"><strong>IMDH</strong></div>
            </div>
        </section>

        {/* Perguntas frequentes */}
        <section id="faq" class="section container" aria-labelledby="faq-title">
            <h2 id="faq-title" class="section-title">Perguntas frequentes</h2>

            <div class="faq-list reveal">
                <details>
                    <summary>Como faço para pedir refúgio?</summary>
                    <div class="faq-answer">Procure uma unidade da Polícia Federal ou um posto de atendimento indicado e peça orientação. Procure apoio de ONGs e defensorias.</div>
                </details>

                <details>
                    <summary>Quanto tempo demora o processo?</summary>
                    <div class="faq-answer">O tempo varia por caso; mantenha contato com órgãos oficiais e busque assistência jurídica.</div>
                </details>

                <details>
                    <summary>Posso trabalhar enquanto aguardo o reconhecimento?</summary>
                    <div class="faq-answer">Dependendo da autorização, pode haver caminhos para regularização; consulte orientações legais.</div>
                </details>
            </div>
        </section>

        {/* Voluntariado */}
        <section id="voluntariado" class="section container" aria-labelledby="vol-title">
            <h2 id="vol-title" class="section-title">Voluntariado</h2>

            <p class="reveal">Quer ajudar? Inscreva-se como voluntário e escolha entre doações, transporte, acolhimento temporário ou suporte documental.</p>

            <form id="volunteer-form" class="vol-form reveal" aria-label="Formulário de voluntariado">
                <input type="text" id="v-name" placeholder="Seu nome" required />
                <input type="email" id="v-email" placeholder="Email" required />
                <select id="v-option">
          <option value="">Escolha uma opção</option>
          <option value="doacao">Doação de itens</option>
          <option value="transporte">Transporte</option>
          <option value="hospedagem">Hospedagem temporária</option>
          <option value="documentacao">Apoio documental</option>
        </select>
                <textarea id="v-message" placeholder="Mensagem (opcional)"></textarea>
                <button type="submit" class="btn btn-primary">Enviar inscrição</button>
                <div id="vol-feedback" aria-live="polite"></div>
            </form>
        </section>
        
        {/* CONTATO */}
        <section id="contato" class="section container" aria-labelledby="contact-title">
            <h2 id="contact-title" class="section-title">Contato</h2>

            <div class="grid-2">
                <div>
                    <p>Email: <a href="mailto:contato@refugio.app">contato@refugio.app</a></p>
                    <p>Telefone: (85) 99999-0000</p>
                </div>
                <div>
                    <p>Quer nos apoiar? <a href="#voluntariado">Se inscreva como voluntário</a> ou envie uma proposta.</p>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;